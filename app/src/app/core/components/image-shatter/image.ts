import { HttpClient } from '@angular/common/http'
import * as THREE from 'three'
import { Scene } from './scene'
import { BehaviorSubject } from 'rxjs'

type State = 'solid' | 'shattered'

export class Image {
  private _vertexShader: string
  private _fragmentShader: string

  private _rendered = new BehaviorSubject(false)
  get rendered () {
    return this._rendered.asObservable()
  }

  private _targetState: State = 'solid'
  private _currentState: State = 'solid'

  private _stateConfig: {
    [key in State]: {
      objects: {
        mesh: THREE.Mesh,
        solid?: {
          x: number
          y: number
          z: number
          rx: number
          ry: number
          rz: number
        },
        shattered?: {
          x: number
          y: number
          z: number
          rx: number
          ry: number
          rz: number
        }
      }[]
    }
  } = {
    solid: {
      objects: []
    },
    shattered: {
      objects: []
    }
  }

  constructor (
    private _http: HttpClient,
    private _src: string,
    private _width: number,
    private _height: number,
    private _scene: Scene
  ) {
    this.InitRender()
    .then(() => this._rendered.next(true))
  }

  private async InitRender () {
    this._vertexShader = await this._http.get(`assets/shaders/vertex-shader.glsl`, { responseType: 'text' }).toPromise()
    this._fragmentShader = await this._http.get(`assets/shaders/fragment-shader.glsl`, { responseType: 'text' }).toPromise()

    const bounds = {
      x: {
        min: -(this._width / 2),
        max: this._width / 2
      },
      y: {
        min: -(this._height / 2),
        max: this._height / 2
      }
    }

    // TEMP
    const coords = { x: bounds.x.min, y: bounds.y.min, z: 0 }

    const loader = new THREE.TextureLoader()
    const material = new THREE.ShaderMaterial({
      uniforms:
      {
        ...THREE.UniformsLib.lights,
        texture: {
          type: 't',
          value: loader.load(this._src)
        },
        lightPosition: {
          type: 'v3',
          value: this._scene.light.position
        }
      },
      vertexShader: shaderParse(this._vertexShader),
      fragmentShader: shaderParse(this._fragmentShader),
      side: THREE.DoubleSide,
      transparent: true,
      lights: true
    })

    const createMesh = (geom: THREE.Geometry | THREE.BufferGeometry) => {
      const mesh = new THREE.Mesh(geom, material)
      mesh.position.set(0,0,2)
      mesh.castShadow = true
      mesh.receiveShadow = true
      return mesh
    }

    this._stateConfig.solid.objects = [{
      mesh: createMesh(new THREE.PlaneGeometry(this._width, this._height))
    }]

    const calculateUv = (x: number, y: number) => {
      const clip = (n: number, max: number) => Math.max(0, Math.min(n, max))
      return [
        clip(distance(bounds.x.min, x), this._width) / this._width,
        clip(distance(bounds.y.min, y), this._height) / this._height
      ]
    }

    // Temp array
    const geometries: Float32Array[] = [
      new Float32Array([
        coords.x, coords.y, coords.z, // bottom left
        coords.x + this._width, coords.y, coords.z, // bottom right
        coords.x + this._width, coords.y + this._height, coords.z // upper right
      ]),
      new Float32Array([
        coords.x + this._width, coords.y + this._height, coords.z, // upper right
        coords.x, coords.y + this._height, coords.z, // upper left
        coords.x, coords.y, coords.z // bottom left
      ])
    ]

    const geoms = geometries.map((vertices, index) => {
      const geom = new THREE.BufferGeometry()
      const uvs = []
      if (vertices.length % 3 !== 0) throw new Error('Vertices length invalid.')

      for (let i = 0; i < vertices.length; i += 3) {
        const [x, y] = vertices.slice(i, i + 2)

        uvs.push(...calculateUv(x, y))
      }

      geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
      geom.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2))
      geom.computeVertexNormals()

      const mesh = createMesh(geom)
      return {
        mesh,
        solid: {
          x: mesh.position.x, y: mesh.position.y, z: mesh.position.z,
          rx: 0, ry: 0, rz: 0
        },
        shattered: {
          x: mesh.position.x - index * 10, y: mesh.position.y + index * 10, z: mesh.position.z + index * 10,
          rx: degreesToRadians(index * -10), ry: degreesToRadians(index * -10), rz: degreesToRadians(index * -5)
        }
      }
    })

    // ----
    this._stateConfig.shattered.objects = [
      ...geoms
    ]

    this.RenderState()
  }

  changeToState (state: State) {
    if (this._targetState === state) return
    this._targetState = state

    this.AnimateToState()
  }

  private RenderState () {
    this._scene.clearScene()
    const config = this._stateConfig[this._currentState]
    for (const obj of config.objects) {
      this._scene.scene.add(obj.mesh)
    }
  }

  _nextFrame?: number
  private AnimateToState () {
    const cleanupFrame = () => {
      if (this._nextFrame) cancelAnimationFrame(this._nextFrame)
      this._nextFrame = undefined
    }

    let animationDone = true
    const config = this._stateConfig.shattered

    for (const obj of config.objects) {
      const moveAxis = (key: 'z' | 'x' | 'y', set: (x: number) => void) => {
        const curr = obj.mesh.position[key]
        const target = obj[this._targetState][key]
        if (curr !== target) {
          const diff = distance(target, curr)
          if (diff <= AXIS_SPEED) {
            set(target)
          } else {
            const direction = target < curr ? -AXIS_SPEED : AXIS_SPEED
            animationDone = false
            set(curr + direction)
          }
        }
      }

      const rotateAxis = (key: 'z' | 'x' | 'y'): number => {
        const curr = obj.mesh.rotation[key]
        const target = obj[this._targetState][`r${key}`]

        if (curr !== target) {
          const diff = distance(target, curr)
          if (diff <= ROTATION_SPEED) {
            return target
          } else {
            const direction = target < curr ? -ROTATION_SPEED : ROTATION_SPEED
            animationDone = false
            return curr + direction
          }
        }
        return curr
      }

      moveAxis('z', (val) => obj.mesh.position.setZ(val))
      moveAxis('x', (val) => obj.mesh.position.setX(val))
      moveAxis('y', (val) => obj.mesh.position.setY(val))

      const [x, y, z] = [
        rotateAxis('x'),
        rotateAxis('y'),
        rotateAxis('z')
      ]

      obj.mesh.rotation.set(x, y, z)
    }

    if (!animationDone) {
      if (this._targetState === 'shattered' && this._currentState === 'solid') {
        this._currentState = this._targetState
        this.RenderState()
      }

      this._nextFrame = requestAnimationFrame(this.AnimateToState.bind(this))
      return
    }

    if (this._targetState === 'shattered' && this._currentState === 'solid') {
      this.AnimateToState()
      return
    }

    if (this._targetState === 'solid' && this._currentState === 'shattered') {
      this._currentState = this._targetState
      this.RenderState()
    }

    cleanupFrame()
  }
}

const AXIS_SPEED = 0.5
const ROTATION_SPEED = degreesToRadians(1.7)

const distance = (a: number, b: number) => Math.abs(a - b)

function shaderParse (glsl: string) {
  const replaceThreeChunkFn = (_: any, b: any) => {
    return THREE.ShaderChunk[b] + '\n'
  }

  return glsl.replace(/\/\/\s?chunk\(\s?(\w+)\s?\);/g, replaceThreeChunkFn)
}

function degreesToRadians (deg: number) {
  return deg * Math.PI / 180
}
