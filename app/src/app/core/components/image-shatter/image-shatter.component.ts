import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core'
import * as Three from 'three'
import { Subscription, fromEvent } from 'rxjs'

@Component({
  selector: 'app-image-shatter',
  templateUrl: './image-shatter.component.html',
  styleUrls: ['./image-shatter.component.scss']
})
export class ImageShatterComponent implements AfterViewInit, OnDestroy {
  private _subscriptions = new Subscription()

  @Input() src: string

  camera: Three.PerspectiveCamera
  scene: Three.Scene
  planeGeometry: Three.PlaneGeometry
  material: Three.MeshNormalMaterial
  mesh: Three.Mesh
  renderer: Three.WebGLRenderer

  raycaster: Three.Raycaster
  rendererMouse: Three.Vector2

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
        if (intersection) console.log('Hover')
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
    this.camera = new Three.PerspectiveCamera(50, clientWidth / clientHeight, 0.01, 1000)
    this.camera.position.z = 100

    this.scene = new Three.Scene()
    const textureLoader = new Three.TextureLoader()
    const material = new Three.MeshLambertMaterial({
      map: textureLoader.load(this.src)
    })

    this.planeGeometry = new Three.PlaneGeometry(70, 70 * 0.6)
    this.material = new Three.MeshNormalMaterial()
    // this.mesh = new Three.Mesh(this.geometry, this.material)
    this.mesh = new Three.Mesh(this.planeGeometry, material)
    this.mesh.position.set(0,0,0)

    const light = new Three.PointLight(0xffffff, 1, 0)
    light.position.set(1, 1, 400)

    window['geom'] = this.planeGeometry
    console.log('this.planeGeometry.vertices:', this.planeGeometry.vertices)

    this.scene.add(this.mesh)
    this.scene.add(light)

    this.renderer = new Three.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#6e6e6e') // 0xffffff
    this.renderer.setSize(clientWidth, clientHeight)
    this.element.appendChild(this.renderer.domElement)

    this.raycaster = new Three.Raycaster()
    this.rendererMouse = new Three.Vector2()

    this.updateRenderer()

    setTimeout(() => this.updateRenderer(), 500)

    window['obj'] = this
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
