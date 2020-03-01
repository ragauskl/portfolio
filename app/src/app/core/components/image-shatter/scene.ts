import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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
    this.camera.position.set(0, 0, 500)
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
      new THREE.MeshPhysicalMaterial({
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

    this.light = new THREE.SpotLight('white', 0.5, undefined, undefined, 0.5)
    this.light.shadow.mapSize.width = 512 * 4
    this.light.shadow.mapSize.height = 512 * 4
    this.light.position.set(0, 10, 400)
    this.light.castShadow = true
    this.light.shadow.camera.near = 1
    this.light.shadow.camera.far = 4000
    this.light.shadow.camera.fov = 30
    // Important for objects to not drop shadow on themselves
    this.light.shadow.bias = -0.0001
    this.light.penumbra = 0.5
    this.scene.add(this.light)
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
      this.camera.position.x,
      this.camera.position.y,
      this.camera.position.z
    )

      this.light.rotation.set(
      this.camera.rotation.x,
      this.camera.rotation.y,
      this.camera.rotation.z
    )
    }

    if (this.lightHelper) this.lightHelper.update()
    if (this.shadowCameraHelper) this.shadowCameraHelper.update()
  }
}
