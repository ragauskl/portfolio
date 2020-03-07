import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { degreesToRadians } from './utils'

export class Scene {
  scene: THREE.Scene
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
  lights: THREE.SpotLight[] = []

  private _background: THREE.Mesh
  controls: OrbitControls

  raycaster: THREE.Raycaster
  ray: THREE.Ray
  rendererMouse: THREE.Vector2
  helpers: (THREE.SpotLightHelper | THREE.CameraHelper)[] = []

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

  get objects () {
    return this.scene.children.filter(x => x !== this._background && (
      x instanceof THREE.Mesh || x instanceof THREE.Group
    ))
  }

  constructor (
    private element: HTMLElement,
    private debug = false
  ) {
    this.UpdateMouse()

    this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.01, 10000)
    this.camera.position.z = 600

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
    this.ray = new THREE.Ray()
    this.rendererMouse = new THREE.Vector2()

    this.animate()
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
    for (const child of this.objects) {
      this.scene.remove(child)
    }
  }

  updateMouse (x: number, y: number) {
    this.mouse.updatePosition(x, y)
    if (this.raycaster) {
      this.rendererMouse.x = (this.mouse.relativeX / this.width) * 2 - 1
      this.rendererMouse.y = -(this.mouse.relativeY / this.height) * 2 + 1
      this.raycaster.setFromCamera(this.rendererMouse, this.camera)
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

    this._background.position.set(0, 0, -300)
    this._background.receiveShadow = true
    this.scene.add(this._background)

  }

  private SetupLight () {
    const ambient = new THREE.AmbientLight('white', 0.5)
    this.scene.add(ambient)

    for (const [x, y, z] of [
      [0, 10, 600],
      [0, -10, 700]
    ]) {
      const light = new THREE.SpotLight('white', 0.3, undefined, degreesToRadians(160))
      light.shadow.mapSize.width = 512 * 2
      light.shadow.mapSize.height = 512 * 2
      light.position.set(x, y, z)
      light.castShadow = true
      light.shadow.camera.near = 1
      light.shadow.camera.far = 1000
      // Important for objects to not drop shadow on themselves
      light.shadow.bias = -0.0001
      light.penumbra = 0.5
      this.scene.add(light)
      this.lights.push(light)
    }

  }

  private SetupDebugTools () {
    for (const light of this.lights) {
      const lightHelper = new THREE.SpotLightHelper(light)
      this.scene.add(lightHelper)
      this.helpers.push(lightHelper)

      const shadowCameraHelper = new THREE.CameraHelper(light.shadow.camera)
      this.scene.add(shadowCameraHelper)
      this.helpers.push(shadowCameraHelper)
    }

    this.scene.add(new THREE.AxesHelper(10))

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

  updateLight () {
    this.helpers.forEach(h => h.update())
  }
}
