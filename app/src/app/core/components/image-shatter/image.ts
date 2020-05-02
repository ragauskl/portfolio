import { HttpClient } from '@angular/common/http'
import * as THREE from 'three'
import { Scene } from './scene'
import { BehaviorSubject } from 'rxjs'
import { getTriangleVertices, calculateNewCentroid } from './triangulate'
import { distance, degreesToRadians, round, randomRange, getRangeOptions, randomFrom, map, pointDistance } from './utils'
import { cloneDeep } from 'lodash'
type State = 'solid' | 'shattered'

export class Image {
  private _vertexShader: string
  private _fragmentShader: string

  private _rendered = new BehaviorSubject(false)
  get rendered () {
    return this._rendered.asObservable()
  }

  text: THREE.Mesh

  private _targetState: State = 'solid'
  private _currentState: State = 'solid'

  activeGroup: THREE.Group
  bbox: THREE.Box3
  matrix: THREE.Matrix4

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
    window['image'] = this
    this.InitRender()
    .then(() => this._rendered.next(true))
  }

  debugShardArray: {
    i: number
    o: {x: number, y: number}
    n: {x: number, y: number}
    z: number
    mesh: THREE.Mesh
  }[] = []

  private async InitRender () {
    this._vertexShader = await this._http.get(`assets/three/shaders/vertex-shader.glsl`, { responseType: 'text' }).toPromise()
    this._fragmentShader = await this._http.get(`assets/three/shaders/fragment-shader.glsl`, { responseType: 'text' }).toPromise()

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
    const lights = cloneDeep(THREE.UniformsLib.lights)

    const createMesh = (geom: THREE.Geometry | THREE.BufferGeometry) => {
      const material = new THREE.ShaderMaterial({
        uniforms:
        {
          ...lights,
          texture: {
            type: 't',
            value: loader.load(this._src)
          },
          bWidth: {
            type: 'float',
            value: 0.017
          },
          bColor: {
            type: 'vec3',
            value: new THREE.Vector3(78, 83, 87)
          }
        },
        vertexShader: shaderParse(this._vertexShader),
        fragmentShader: shaderParse(this._fragmentShader),
        side: THREE.DoubleSide,
        transparent: true,
        lights: true
      })

      const mesh = new THREE.Mesh(geom, material)
      mesh.position.set(0, 0, 0)
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

    const zs: {
      [z: string]: THREE.Box3[]
    } = {}
    // Spacing 20z because if z difference is less, the elements start flickering as if they overlap
    // even tho they don't, might have something to do with custom shader
    const zOptions = getRangeOptions(-50, 8, 20).map(z => `${z}`)
    this._stateConfig.shattered.objects = geometries.map((vertices, i) => {
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

      // Set vertices to be drawn around center of canvas, and be positioned using objects
      // position property
      const position = { x: centerX, y: centerY, z: 0 }

      for (let i = 0; i < vertices.length; i += 3) {
        const [x, y] = vertices.slice(i, i + 2)
        vertices[i] = x - centerX
        vertices[i + 1] = y - centerY
      }

      geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
      geom.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2))
      geom.computeVertexNormals()

      const newCentroid = calculateNewCentroid(centerX, centerY, 1.45, 1.50)
      const shatteredPosition = { x: newCentroid.x, y: newCentroid.y }

      const diff = {
        x: newCentroid.x - centerX,
        y: newCentroid.y - centerY
      }

      const distance = Math.sqrt(Math.pow(newCentroid.x, 2) + Math.pow(newCentroid.y, 2)) * 100 / ((this._width + this._height) / 2)
      const rx = 2
      const ry = 2
      const rz = 21
      const randomRotation = {
        rx: degreesToRadians(randomRange(-rx, rx)), ry: degreesToRadians(randomRange(-ry, ry)), rz: degreesToRadians(randomRange(-rz, rz))
      }

      let mesh = createMesh(geom)
      mesh.position.set(shatteredPosition.x, shatteredPosition.y, position.z)
      mesh.rotation.set(randomRotation.rx, randomRotation.ry, randomRotation.rz)
      mesh.geometry.computeBoundingBox()

      const box3 = new THREE.Box3().setFromObject(mesh)

      const pad = 30
      const zPad = 21
      const bbox = new THREE.Box3().setFromPoints([
        new THREE.Vector3(box3.min.x + diff.x - pad, box3.min.y + diff.y - pad, box3.min.z - zPad),
        new THREE.Vector3(box3.max.x + diff.x + pad, box3.max.y + diff.y + pad, box3.max.z + zPad)
      ])

      mesh.position.set(position.x, position.y, position.z)
      mesh.rotation.set(0, 0, 0)
      mesh.geometry.computeBoundingBox()

      const usedZs = Object.keys(zs).filter(z =>
        !!zs[z].find(box =>
          box.intersectsBox(bbox)
        )
      )

      const zFrom = usedZs.length ? [...zOptions].filter(z => !usedZs.includes(z)) : zOptions

      let z = randomFrom(zFrom)
      if (isNaN(+z)) {
        console.warn('Fragment overlap warning. 0 unoccupied nearby z-indexes found.')
        z = randomFrom(zOptions)
      }

      // this.debugShardArray.push({
      //   o: { x: centerX, y: centerY },
      //   n: { x: newCentroid.x, y: newCentroid.y },
      //   i,
      //   z: +z,
      //   usedZ: [...usedZs],
      //   remainingZ: [...zFrom],
      //   mesh,
      //   distance
      // } as any)
      if (!zs[`${z}`]) zs[`${z}`] = []
      zs[`${z}`].push(bbox)

      const object = {
        mesh,
        solid: {
          x: mesh.position.x, y: mesh.position.y, z: mesh.position.z,
          rx: 0, ry: 0, rz: 0
        },
        shattered: {
          ...shatteredPosition, z: mesh.position.z + +z,
          ...randomRotation
        }
      }

      return object
    })

    const fontLoader = new THREE.FontLoader()
    const text: THREE.TextGeometry = await new Promise(res => {
      fontLoader.load('assets/three/fonts/roboto_bold.typeface.json', font => {
        res(new THREE.TextGeometry('Read more', {
          font,
          size: 20,
          height: 1,
          curveSegments: 12
        }))
      })
    })
    text.computeBoundingBox()
    text.computeVertexNormals()

    const buffer = new THREE.BufferGeometry().fromGeometry(text)
    this.text = new THREE.Mesh(buffer, [
      new THREE.MeshPhongMaterial({ color: 'black', flatShading: true })
    ])
    this.text.receiveShadow = true

    const size = new THREE.Box3().setFromObject(this.text)
    const [offsetX, offsetY] = [round(size.max.x - size.min.x, 2) / 2, round(size.max.y - size.min.y, 2) / 2]
    this.text.position.set(-offsetX, -offsetY, -55)

    this.RenderState()
  }

  // DEBUG: render index on every shard, to identify it in debugShardArray
  async renderPositions () {
    const fontLoader = new THREE.FontLoader()
    for (const el of this.debugShardArray) {
      const text: THREE.TextGeometry = await new Promise(res => {
        fontLoader.load('assets/three/fonts/roboto_bold.typeface.json', font => {
          res(new THREE.TextGeometry(`${el.i}:${el.mesh.position.z}`, {
            font,
            size: 7,
            height: 1,
            curveSegments: 12
          }))
        })
      })
      text.computeBoundingBox()
      text.computeVertexNormals()

      const buffer = new THREE.BufferGeometry().fromGeometry(text)
      const mesh = new THREE.Mesh(buffer, [
        new THREE.MeshPhongMaterial({ color: 'red', flatShading: true })
      ])
      const size = new THREE.Box3().setFromObject(mesh)
      const [offsetX, offsetY] = [round(size.max.x - size.min.x, 2) / 2, round(size.max.y - size.min.y, 2) / 2]
      mesh.position.set(el.n.x - offsetX, el.n.y - offsetY, el.z + 70)
      this.activeGroup.add(mesh)
    }
  }

  changeToState (state: State) {
    if (this._targetState === state) return
    this._targetState = state
    this._stateConfig.shattered.objects.forEach(o => o.steps = undefined)
    this.AnimateToState(true)
  }

  _rotationConfig = {
    original: {
      x: 0,
      y: 0
    },
    target: {
      x: 0,
      y: 0
    }
  }

  private RotateBy (x: number, y: number) {
    this._rotationConfig.target.x = x
    this._rotationConfig.target.y = y

    if (this._nextRotateFrame) cancelAnimationFrame(this._nextRotateFrame)
    this._nextRotateFrame = undefined
    this.AnimateRotation()
  }

  resetRotation () {
    this.RotateBy(0, 0)
  }

  rotateToMouse () {
    this.changeToState('shattered')
    const distanceX = Math.abs(this._scene.mouse.x) * 100 / (this._width / 2) * (this._scene.mouse.x < 0 ? -1 : 1) / 6
    const distanceY = Math.abs(this._scene.mouse.y) * 100 / (this._height / 2) * (this._scene.mouse.y < 0 ? -1 : 1) / 8
    this.RotateBy(degreesToRadians(distanceY), degreesToRadians(distanceX))
  }

  private _nextRotateFrame?: number
  private AnimateRotation () {
    const cleanupFrame = () => {
      if (this._nextRotateFrame) cancelAnimationFrame(this._nextRotateFrame)
      this._nextRotateFrame = undefined
    }

    let animationDone = true
    const config = this._rotationConfig.target

    const axisSpeed = degreesToRadians(0.07)

    const rotateAxis = (key: 'x' | 'y'): number => {
      const curr = this.activeGroup.rotation[key]
      const target = config[key]

      if (curr !== target) {
        const diff = distance(target, curr)
        if (diff <= axisSpeed) {
          return target
        } else {
          const direction = target < curr ? -axisSpeed : axisSpeed
          animationDone = false
          return curr + direction
        }
      }
      return curr
    }

    const [x, y, z] = [
      rotateAxis('x'),
      rotateAxis('y'),
      0
    ]

    this.activeGroup.rotation.set(x, y, z)

    if (!animationDone) {
      this._nextFrame = requestAnimationFrame(this.AnimateRotation.bind(this))
      return
    }
    cleanupFrame()
  }

  private _firstRender = true
  private RenderState () {
    this._scene.clearScene()

    this.activeGroup = new THREE.Group()
    this._scene.scene.add(this.activeGroup)
    this.activeGroup.position.z = 20
    this.activeGroup.add(this.text)

    if (this._firstRender) {
      this._firstRender = false
      // On first render, also render fragments
      // because they take some time to initialise on load.
      // Set their z behind so it's not in view, but not too far
      // so that it is not visible/different during first animation
      setTimeout(() => {
        if (this._targetState === 'shattered') return
        const config = this._stateConfig.shattered
        for (const obj of config.objects) {
          obj.mesh.position.z = -30
          this.activeGroup.add(obj.mesh)
        }
        setTimeout(() => this._scene.updateCamera(), 10)
      }, 105)
    }

    const config = this._stateConfig[this._currentState]
    for (const obj of config.objects) {
      this.activeGroup.add(obj.mesh)
    }
    this.UpdateIntersectionSetup()
    setTimeout(() => this._scene.updateCamera(), 100)
  }

  private UpdateIntersectionSetup () {
    this.bbox = new THREE.Box3().setFromObject(this.activeGroup)

    if (!this.matrix) this.matrix = new THREE.Matrix4()
    this.matrix.getInverse(this.activeGroup.matrixWorld)
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
        const distance = pointDistance(obj[this._targetState], obj.mesh.position)

        const ANIMATION_TIME = 1000
        obj.steps = {
          axis: distance / ANIMATION_TIME * 60,
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
    this.UpdateIntersectionSetup()

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
