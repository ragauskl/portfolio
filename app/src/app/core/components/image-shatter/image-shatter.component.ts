import { Component, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core'
import * as THREE from 'three'
import { Subscription, fromEvent } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Scene } from './scene'
import { Image } from './image'
@Component({
  selector: 'app-image-shatter',
  templateUrl: './image-shatter.component.html',
  styleUrls: ['./image-shatter.component.scss']
})
export class ImageShatterComponent implements AfterViewInit, OnDestroy {
  private _subscriptions = new Subscription()

  @Input() src: string

  scene: Scene
  image: Image

  constructor (
    private _el: ElementRef<HTMLElement>,
    private _http: HttpClient
  ) {}

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
  }

  async ngAfterViewInit () {
    const element = this._el.nativeElement
    window['obj'] = this

    this._subscriptions.add(
      fromEvent(window, 'keydown').subscribe(e => {
        if ((e as KeyboardEvent).key === 'Escape') {
          this.scene.updateLight(true)
        } else if ((e as KeyboardEvent).key === 'r') {
          this.scene.resetCamera()
        }
      })
    )

    this.scene = new Scene(element, true)
    this._subscriptions.add(
      fromEvent(window, 'resize').subscribe(() => this.scene.onResize())
    )

    this.image = new Image(
      this._http,
      this.src,
      350,
      210,
      this.scene
    )

    const sub = this.image.rendered.subscribe(rendered => {
      if (!rendered) return
      sub.unsubscribe()

      this._subscriptions.add(
        fromEvent(element, 'mouseleave').subscribe(e => {
          this.image.changeToState('solid')
          this.scene.resetCamera()
        })
      )

      this._subscriptions.add(
        fromEvent(element, 'mousemove').subscribe(e => {
          this.image.changeToState('shattered')

          const event = e as MouseEvent
          const rect = element.getBoundingClientRect()
          this.scene.mouse.updatePosition(event.clientX - rect.left, event.clientY - rect.top)

          const rotateX = +(this.scene.mouse.y / element.offsetHeight / 0.5).toFixed(2)
          const rotateY = +(this.scene.mouse.x / element.offsetWidth / 0.5).toFixed(2)

          this.scene.moveToMouse()
          //   for (const mesh of this.scene.meshObjects) {
          //     mesh.rotation.x = +rotateX
          //     mesh.rotation.y = +rotateY
          //   }

          //   this.scene.renderer.render(this.scene.scene, this.scene.camera)
        })
      )
    })

    // this._subscriptions.add(
    //   fromEvent(this.element, 'mousemove').subscribe(e => {
    //     const event = e as MouseEvent

    //     // Calculate location on image from position on page
    //     const rect = this.element.getBoundingClientRect()
    //     this.updateMousePosition(event.clientX - rect.left, event.clientY - rect.top)

    //     this.scene.rendererMouse.x = (this.scene.mouse.relativeX / this.scene.width) * 2 - 1
    //     this.scene.rendererMouse.y = -(this.scene.mouse.relativeY / this.scene.height) * 2 + 1

    //     this.scene.raycaster.setFromCamera(this.scene.rendererMouse, this.scene.camera)

    //     this.RenderImageAs('buffer')
    //     this.rotateMesh()
    //   })
    // )
  }

  // private _resetAnimation
  // resetAnimation () {
    // let rx = 0
    // let ry = 0
    // for (const mesh of this.meshArray) {
    //   const { x, y } = mesh.rotation
    //   if (y > 0.1) {
    //     mesh.rotation.y -= 0.05
    //   } else if (y < -0.1) {
    //     mesh.rotation.y += 0.05
    //   } else {
    //     mesh.rotation.y = 0
    //   }

    //   if (x > 0.1) {
    //     mesh.rotation.x -= 0.05
    //   } else if (x < -0.1) {
    //     mesh.rotation.x += 0.05
    //   } else {
    //     mesh.rotation.x = 0
    //   }

    //   rx += mesh.rotation.x
    //   ry += mesh.rotation.y
    // }
    // this.scene.renderer.render(this.scene.scene, this.scene.camera)

    // if (rx !== 0 || ry !== 0) {
    //   this._resetAnimation = requestAnimationFrame(this.resetAnimation.bind(this))
    // }
  // }

  // rotateMesh () {
  //   const rotateX = (this.scene.mouse.y / this.element.offsetHeight / 0.5).toFixed(2)
  //   const rotateY = (this.scene.mouse.x / this.element.offsetWidth / 0.5).toFixed(2)

  //   for (const mesh of this.scene.meshObjects) {
  //     mesh.rotation.x = +rotateX
  //     mesh.rotation.y = +rotateY
  //   }

  //   this.scene.renderer.render(this.scene.scene, this.scene.camera)
  // }

  // updateMousePosition (x: number, y: number) {
  //   // if (this._resetAnimation) cancelAnimationFrame(this._resetAnimation)
  //   this.scene.mouse.updatePosition(x, y)

  // }

}
