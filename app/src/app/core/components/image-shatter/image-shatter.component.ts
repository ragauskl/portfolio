import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core'
import * as THREE from 'three'
import { Subscription, fromEvent } from 'rxjs'

@Component({
  selector: 'app-image-shatter',
  templateUrl: './image-shatter.component.html',
  styleUrls: ['./image-shatter.component.scss']
})
export class ImageShatterComponent implements AfterViewInit, OnDestroy {
  private _subscriptions = new Subscription()

  @Input() src: string

  camera: THREE.PerspectiveCamera
  scene: THREE.Scene
  planeGeometry: THREE.PlaneGeometry | THREE.PlaneBufferGeometry
  bufferGeometry: THREE.BufferGeometry
  material: THREE.MeshLambertMaterial | THREE.ShaderMaterial
  mesh: THREE.Mesh
  renderer: THREE.WebGLRenderer

  raycaster: THREE.Raycaster
  rendererMouse: THREE.Vector2

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

  get element (): HTMLElement {
    return this._el.nativeElement
  }

  constructor (
    private _el: ElementRef<HTMLElement>
  ) {}

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
  }

  ngAfterViewInit () {
    this.mouse.setOrigin(this.element)
    this.init()

    this._subscriptions.add(
      fromEvent(this.element, 'mouseleave').subscribe(e => {
        const event = e as MouseEvent
        // this.rotateMesh(0, 0)
        this.resetAnimation()
        this.RenderImageAs('plane')
      })
    )

    this._subscriptions.add(
      fromEvent(this.element, 'mousemove').subscribe(e => {
        const event = e as MouseEvent

        // Calculate location on image from position on page
        const rect = this.element.getBoundingClientRect()
        this.updateMousePosition(event.clientX - rect.left, event.clientY - rect.top)

        const { clientHeight, clientWidth } = this.element
        this.rendererMouse.x = (this.mouse.relativeX / clientWidth) * 2 - 1
        this.rendererMouse.y = -(this.mouse.relativeY / clientHeight) * 2 + 1

        this.raycaster.setFromCamera(this.rendererMouse, this.camera)

        const [intersection] = this.raycaster.intersectObject(this.mesh)
        // if (intersection && !this.bufferGeometry) this.RenderImageAs('buffer')
        this.RenderImageAs('buffer')
        this.rotateMesh()
      })
    )

    this._subscriptions.add(
      fromEvent(window, 'resize').subscribe(() => this.updateCamera())
    )
  }

  updateCamera () {
    const { clientHeight, clientWidth } = this.element
    this.renderer.setSize(clientWidth, clientHeight)

    this.camera.aspect = clientWidth / clientHeight
    this.camera.updateProjectionMatrix()
    this.updateRenderer()
  }

  updateRenderer () {
    this.renderer.render(this.scene, this.camera)
  }

  init () {
    const { clientHeight, clientWidth } = this.element
    this.camera = new THREE.PerspectiveCamera(50, clientWidth / clientHeight, 0.01, 1000)
    this.camera.position.z = 100

    this.scene = new THREE.Scene()

    const light = new THREE.PointLight(0xffffff, 1, 0)
    light.position.set(1, 1, 400)

    this.scene.add(light)

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#6e6e6e') // 0xffffff
    this.renderer.setSize(clientWidth, clientHeight)
    this.element.appendChild(this.renderer.domElement)

    this.raycaster = new THREE.Raycaster()
    this.rendererMouse = new THREE.Vector2()

    this.RenderImageAs('plane')

    setTimeout(() => this.updateRenderer(), 500)

    window['obj'] = this
  }

  private RenderImageAs (geom?: 'plane' | 'buffer') {
    if (this.mesh) {
      this.scene.remove(this.mesh)
      this.mesh = undefined
      this.planeGeometry = undefined
      this.bufferGeometry = undefined
    }

    if (!this.material) {
      const vertexShader = document.getElementById('vertex-shader').textContent
      const fragmentShader = document.getElementById('fragment-shader').textContent

      const loader = new THREE.TextureLoader()
      this.material = new THREE.ShaderMaterial({
        uniforms: {
          texture: {
            type: 't',
            value: loader.load(this.src)
          }
        },
        vertexShader,
        fragmentShader
      })
    }

    const imageSize = { width: 70, height: 42 }
    const coords = { x: -(imageSize.width / 2), y: -(imageSize.height / 2), z: 0 }

    const setMesh = (geom: THREE.Geometry | THREE.BufferGeometry) => {
      this.mesh = new THREE.Mesh(geom, this.material)
      this.mesh.position.set(0,0,0)
      this.scene.add(this.mesh)
    }
    if (geom === 'plane') {
      this.planeGeometry = new THREE.PlaneBufferGeometry(imageSize.width, imageSize.height)
      setMesh(this.planeGeometry)

      // console.log('this.planeGeometry.vertices:', this.planeGeometry.vertices)
    } else if (geom === 'buffer') {
      this.bufferGeometry = new THREE.BufferGeometry()
      const vertices = new Float32Array([
        coords.x, coords.y, coords.z, // bottom left
        coords.x + imageSize.width, coords.y, coords.z, // bottom right
        coords.x + imageSize.width, coords.y + imageSize.height, coords.z, // upper right

        coords.x + imageSize.width, coords.y + imageSize.height, coords.z + 10, // upper right
        coords.x, coords.y + imageSize.height, coords.z + 10, // upper left
        coords.x, coords.y, coords.z + 10 // bottom left
      ])

      // set the uvs for this box; these identify the following corners:
      // lower-left, lower-right, upper-right, upper-left
      const uvs = new Float32Array([
        0.0, 0.0, // bottom left
        1.0, 0.0, // bottom right
        1.0, 1.0, // upper right

        1.0, 1.0, // upper right
        0.0, 1.0, // upper left
        0.0, 0.0 // bottom left
      ])

      // indices = sequence of index positions in `vertices` to use as vertices
      // we make two triangles but only use 4 distinct vertices in the object
      // the second argument to THREE.BufferAttribute is the number of elements
      // in the first argument per vertex
      // this.bufferGeometry.setIndex([0,1,2, 3,4,5])
      this.bufferGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
      this.bufferGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))

      setMesh(this.bufferGeometry)

    }

    this.updateRenderer()
  }

  private _resetAnimation
  resetAnimation () {
    const { x, y } = this.mesh.rotation
    if (y > 0.1) {
      this.mesh.rotation.y -= 0.05
    } else if (y < -0.1) {
      this.mesh.rotation.y += 0.05
    } else {
      this.mesh.rotation.y = 0
    }

    if (x > 0.1) {
      this.mesh.rotation.x -= 0.05
    } else if (x < -0.1) {
      this.mesh.rotation.x += 0.05
    } else {
      this.mesh.rotation.x = 0
    }
    this.renderer.render(this.scene, this.camera)

    if (this.mesh.rotation.x !== 0 || this.mesh.rotation.y !== 0) {
      this._resetAnimation = requestAnimationFrame(this.resetAnimation.bind(this))
    }
  }

  rotateMesh () {
    const rotateX = (this.mouse.y / this.element.offsetHeight / 0.5).toFixed(2)
    const rotateY = (this.mouse.x / this.element.offsetWidth / 0.5).toFixed(2)

    this.mesh.rotation.x = +rotateX
    this.mesh.rotation.y = +rotateY

    this.renderer.render(this.scene, this.camera)
  }

  updateMousePosition (x: number, y: number) {
    if (this._resetAnimation) cancelAnimationFrame(this._resetAnimation)
    this.mouse.updatePosition(x, y)

  }

}
