import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { degreesToRadians, distance, ANIMATION_TIME } from './utils'

export class Scene {
  scene: THREE.Scene
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
  light: THREE.SpotLight

  private _background: THREE.Mesh
  controls: OrbitControls

  raycaster: THREE.Raycaster
  rendererMouse: THREE.Vector2
  lightHelper: THREE.SpotLightHelper
  shadowCameraHelper: THREE.CameraHelper

  // Mouse position relative to element
  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    relativeX: 0,
    relativeY: 0,
    updatePosition: function (x: number, y: number) {
      this.x = x - this._x
      this.y = y - this._y

      this.relativeX = x
      this.relativeY = y
    },
    setOrigin: function (el: HTMLElement) {
      this._x = Math.floor(el.clientWidth / 2)
      this._y = Math.floor(el.clientHeight / 2)
    }
  }

  get height () {
    return this.element.clientHeight
  }
  get width () {
    return this.element.clientWidth
  }

  get meshObjects () {
    return this.scene.children.filter(x => x !== this._background && x instanceof THREE.Mesh)
  }

  _camConfig = {
    original: {
      x: 0,
      y: 0,
      z: 500
    },
    target: {
      x: 0,
      y: 0,
      z: 500
    }
  }

  constructor (
    private element: HTMLElement,
    private debug = false
  ) {
    this.UpdateMouse()

    this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.01, 10000)
    this.camera.position.z = 500

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.width, this.height)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.element.appendChild(this.renderer.domElement)

    this.SetupLight()
    this.SetupBackground()
    if (this.debug) this.SetupDebugTools()

    this.raycaster = new THREE.Raycaster()
    this.rendererMouse = new THREE.Vector2()

    this.animate()
  }

  resetCamera () {
    this.MoveTo(0, 0)
  }

  moveToMouse () {
    this.MoveTo(-this.mouse.x / 2, this.mouse.y / 2)
  }

  private MoveTo (x: number, y: number) {
    this._camConfig.target.x = x
    this._camConfig.target.y = y

    if (this._nextCamFrame) cancelAnimationFrame(this._nextCamFrame)
    this._nextCamFrame = undefined
    this.AnimateCamera()
  }

  private _nextCamFrame?: number
  private AnimateCamera () {
    const cleanupFrame = () => {
      if (this._nextCamFrame) cancelAnimationFrame(this._nextCamFrame)
      this._nextCamFrame = undefined
    }

    let animationDone = true
    const config = this._camConfig.target

    const axisDistances = ['x', 'y', 'z'].map(key => distance(config[key], this.camera.position[key]))
    const average = axisDistances.reduce((sum, val) => sum + val, 0) / axisDistances.length

    const axisSpeed = 0.15

    const moveAxis = (key: 'z' | 'x' | 'y', set: (x: number) => void) => {
      const curr = this.camera.position[key]
      const target = config[key]
      if (curr !== target) {
        const diff = distance(target, curr)
        if (diff <= axisSpeed) {
          set(target)
        } else {
          const direction = target < curr ? -axisSpeed : axisSpeed
          animationDone = false
          set(curr + direction)
        }
      }
    }

    moveAxis('z', (val) => this.camera.position.z = val)
    moveAxis('x', (val) => this.camera.position.x = val)
    moveAxis('y', (val) => this.camera.position.y = val)
    this.updateLight(true)
    if (!animationDone) {
      this._nextFrame = requestAnimationFrame(this.AnimateCamera.bind(this))
      return
    }

    cleanupFrame()
  }

  private _nextFrame?: number
  animate () {
    this._nextFrame = requestAnimationFrame(this.animate.bind(this))
    if (this.controls) this.controls.update()
    this.UpdateCamera()
  }

  stopAnimation () {
    if (this._nextFrame) cancelAnimationFrame(this._nextFrame)
    this._nextFrame = undefined
  }

  onResize () {
    this.UpdateMouse()
  }

  clearScene () {
    for (const child of this.meshObjects) {
      this.scene.remove(child)
    }
  }

  private UpdateMouse () {
    this.mouse.setOrigin(this.element)
  }

  private SetupBackground () {
    this._background = new THREE.Mesh(
      new THREE.PlaneGeometry(this.width * 5, this.height * 5),
      new THREE.MeshPhongMaterial({
        color: 'white',
        side: THREE.DoubleSide
      })
    )

    this._background.position.set(0, 0, -70)
    this._background.receiveShadow = true
    this.scene.add(this._background)

  }

  private SetupLight () {
    const ambient = new THREE.AmbientLight('white', 0.7)
    this.scene.add(ambient)

    this.light = new THREE.SpotLight('white', 1, undefined, degreesToRadians(150))
    this.light.shadow.mapSize.width = 512 * 2
    this.light.shadow.mapSize.height = 512 * 2
    this.light.position.set(0, 50, 400)
    this.light.castShadow = true
    this.light.shadow.camera.near = 1
    this.light.shadow.camera.far = 1000
    // Important for objects to not drop shadow on themselves
    this.light.shadow.bias = -0.0001
    this.light.penumbra = 0.5
    this.scene.add(this.light)

    // this.light = new THREE.SpotLight('white', 0.5, undefined, degreesToRadians(150))
    // this.light.shadow.mapSize.width = 512 * 2
    // this.light.shadow.mapSize.height = 512 * 2
    // this.light.position.set(0, -50, 400)
    // this.light.castShadow = true
    // this.light.shadow.camera.near = 1
    // this.light.shadow.camera.far = 4000
    // // Important for objects to not drop shadow on themselves
    // this.light.shadow.bias = -0.0001
    // this.light.penumbra = 0.5
    // this.scene.add(this.light)
  }

  private SetupDebugTools () {
    // this.lightHelper = new THREE.SpotLightHelper(this.light)
    // this.scene.add(this.lightHelper)

    // this.shadowCameraHelper = new THREE.CameraHelper(this.light.shadow.camera)
    // this.scene.add(this.shadowCameraHelper)

    // this.scene.add(new THREE.AxesHelper(10))

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enablePan = true
  }

  private UpdateCamera () {
    this.renderer.setSize(this.width, this.height)

    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.UpdateRenderer()
  }

  private UpdateRenderer () {
    this.renderer.render(this.scene, this.camera)
  }

  updateLight (pos = false) {
    if (pos) {
      this.light.position.set(
        -this.camera.position.x,
        -this.camera.position.y,
         this.light.position.z
      )
    }

    if (this.lightHelper) this.lightHelper.update()
    if (this.shadowCameraHelper) this.shadowCameraHelper.update()
  }
}
