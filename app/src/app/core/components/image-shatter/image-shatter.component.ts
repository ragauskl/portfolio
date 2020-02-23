import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core'
import * as Three from 'three'
import { Subscription, fromEvent } from 'rxjs'

@Component({
  selector: 'app-image-shatter',
  templateUrl: './image-shatter.component.html',
  styleUrls: ['./image-shatter.component.scss']
})
export class ImageShatterComponent implements AfterViewInit, OnDestroy {
  private _subscriptions = new Subscription()
  camera: Three.PerspectiveCamera
  scene: Three.Scene
  geometry: Three.BoxGeometry
  material: Three.MeshNormalMaterial
  mesh: Three.Mesh
  renderer: Three.WebGLRenderer

  // Mouse position relative to element
  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (x: number, y: number) {
      this.x = x - this._x
      this.y = y - this._y
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
      fromEvent(this.element, 'mouseenter').subscribe(e => {
        const event = e as MouseEvent
      })
    )

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
      })
    )
  }

  init () {
    const { clientHeight, clientWidth } = this.element
    this.camera = new Three.PerspectiveCamera(50, clientWidth / clientHeight, 0.01, 10)
    this.camera.position.z = 1

    this.scene = new Three.Scene()
    this.geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
    this.material = new Three.MeshNormalMaterial()
    this.mesh = new Three.Mesh(this.geometry, this.material)

    this.scene.add(this.mesh)
    this.renderer = new Three.WebGLRenderer({ antialias: true })
    this.renderer.setSize(clientWidth, clientHeight)
    this.element.appendChild(this.renderer.domElement)

    this.renderer.render(this.scene, this.camera)
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

  rotateMesh (x: number, y: number) {
    this.mesh.rotation.x = x
    this.mesh.rotation.y = y

    this.renderer.render(this.scene, this.camera)
  }

  updateMousePosition (x: number, y: number) {
    if (this._resetAnimation) cancelAnimationFrame(this._resetAnimation)
    this.mouse.updatePosition(x, y)

    const rotateX = (this.mouse.y / this.element.offsetHeight / 0.5).toFixed(2)
    const rotateY = (this.mouse.x / this.element.offsetWidth / 0.5).toFixed(2)

    this.rotateMesh(+rotateX, +rotateY)
  }
}
