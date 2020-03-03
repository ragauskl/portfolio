import { HttpClient } from '@angular/common/http'
import * as THREE from 'three'
import { Scene } from './scene'
import { BehaviorSubject, of } from 'rxjs'
import { getTriangleVertices, calculateNewCentroid, translateToOrigin, translateToCornerOrigin } from './triangulate'
import { distance, degreesToRadians, ANIMATION_TIME } from './utils'
import { randomRange } from '../post-cover/helpers/utils'

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
        },
        steps?: {
          axis: number
          rotation: number
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

    const offset = {
      x: this._width / 2,
      y: this._height / 2
    }

    const bounds = {
      x: {
        min: -offset.x,
        max: offset.x
      },
      y: {
        min: -offset.y,
        max: offset.y
      }
    }

    const loader = new THREE.TextureLoader()
    const material = new THREE.ShaderMaterial({
      uniforms:
      {
        ...THREE.UniformsLib.lights,
        texture: {
          type: 't',
          value: loader.load(this._src)
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
      mesh.position.set(0, 0, 20)
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
        +(clip(distance(bounds.x.min, x), this._width) / this._width).toFixed(2),
        +(clip(distance(bounds.y.min, y), this._height) / this._height).toFixed(2)
      ]
    }

    const arr = getTriangleVertices(this._width, this._height)

    const triangles = arr
    .map(vertices =>
      vertices.map(([x, y]) =>
      [+(x - offset.x).toFixed(2), +(y - offset.y).toFixed(2)]
      )
    )

    const geometries: Float32Array[] = (triangles as [[number, number], [number, number], [number, number]][]).map(x =>
      new Float32Array([
        ...x[0], 0,
        ...x[1], 0,
        ...x[2], 0
      ])
    )

    this._stateConfig.shattered.objects = geometries.map(vertices => {
      const geom = new THREE.BufferGeometry()
      const uvs = []
      if (vertices.length % 3 !== 0) throw new Error('Vertices length invalid.')

      const xs: number[] = []
      const ys: number[] = []
      for (let i = 0; i < vertices.length; i += 3) {
        const [x, y] = vertices.slice(i, i + 2)
        xs.push(x)
        ys.push(y)
        uvs.push(...calculateUv(x, y))
      }

      const centerX = xs.reduce((sum, x) => sum + x, 0) / xs.length
      const centerY = ys.reduce((sum, x) => sum + x, 0) / ys.length

      const newCentroid = calculateNewCentroid(centerX, centerY, 0.7, 0.9)

      const diff = {
        x: newCentroid.x - centerX,
        y: newCentroid.y - centerY
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
          x: mesh.position.x + diff.x, y: mesh.position.y + diff.y, z: mesh.position.z + randomRange(0, 20),
          rx: degreesToRadians(randomRange(-3, 3)), ry: degreesToRadians(randomRange(-3, 3)), rz: degreesToRadians(randomRange(-10, 10))
        }
      }
    })

    this.RenderState()
  }

  changeToState (state: State) {
    if (this._targetState === state) return
    this._targetState = state
    this._stateConfig.shattered.objects.forEach(o => o.steps = undefined)

    this.AnimateToState(true)
  }

  private RenderState () {
    this._scene.clearScene()
    const config = this._stateConfig[this._currentState]
    for (const obj of config.objects) {
      this._scene.scene.add(obj.mesh)
    }
  }

  _nextFrame?: number
  private AnimateToState (stateChange = false) {
    const cleanupFrame = () => {
      if (this._nextFrame) cancelAnimationFrame(this._nextFrame)
      this._nextFrame = undefined
    }

    let animationDone = true
    const config = this._stateConfig.shattered

    for (const obj of config.objects) {
      if (!obj.steps) {
        const axisDistances = ['x', 'y', 'z'].map(key => distance(obj[this._targetState][key], obj.mesh.position[key]))
        const average = axisDistances.reduce((sum, val) => sum + val, 0) / axisDistances.length

        const rotationDistances = ['x', 'y', 'z'].map(key => distance(obj[this._targetState][`r${key}`], obj.mesh.rotation[key]))
        const rotationAverage = rotationDistances.reduce((sum, val) => sum + val, 0) / rotationDistances.length

        obj.steps = {
          axis: average / ANIMATION_TIME * 60,
          rotation: degreesToRadians(1.7)
        }
      }
      const moveAxis = (key: 'z' | 'x' | 'y', set: (x: number) => void) => {
        const curr = obj.mesh.position[key]
        const target = obj[this._targetState][key]
        if (curr !== target) {
          const diff = distance(target, curr)
          if (diff <= obj.steps.axis) {
            set(target)
          } else {
            const direction = target < curr ? -obj.steps.axis : obj.steps.axis
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
          if (diff <= obj.steps.rotation) {
            return target
          } else {
            const direction = target < curr ? -obj.steps.rotation : obj.steps.rotation
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
      if (stateChange) {
        this._currentState = this._targetState
        this.RenderState()
        return
      }

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

function shaderParse (glsl: string) {
  const replaceThreeChunkFn = (_: any, b: any) => {
    return THREE.ShaderChunk[b] + '\n'
  }

  return glsl.replace(/\/\/\s?chunk\(\s?(\w+)\s?\);/g, replaceThreeChunkFn)
}
