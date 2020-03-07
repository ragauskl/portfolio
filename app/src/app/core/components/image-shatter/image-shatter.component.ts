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
    window[`obj${Math.round(Math.random() * 10)}`] = this

    this._subscriptions.add(
      fromEvent(window, 'keydown').subscribe(e => {
        if ((e as KeyboardEvent).key === 'Escape') {
          this.scene.updateLight()
        } else if ((e as KeyboardEvent).key === 'r') {
          this.image.resetRotation()
        }
      })
    )

    this.scene = new Scene(element)
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

      const lastPosition = { x: 0, y: 0 }
      this._subscriptions.add(
        fromEvent(window, 'mousemove').subscribe(e => {
          const ev = e as MouseEvent
          lastPosition.x = ev.clientX
          lastPosition.y = ev.clientY
        })
      )

      let mouseOver = false
      const onLeave = () => {
        this.image.changeToState('solid')
        this.image.resetRotation()
        mouseOver = true
      }

      const onMove = (mouseX: number, mouseY: number) => {
        this.image.changeToState('shattered')
        mouseOver = true

        const rect = element.getBoundingClientRect()
        this.scene.mouse.updatePosition(mouseX - rect.left, mouseY - rect.top)

        this.image.rotateToMouse()
      }

      this._subscriptions.add(
        fromEvent(element, 'mouseleave').subscribe(e => onLeave())
      )

      this._subscriptions.add(
        fromEvent(window, 'scroll').subscribe(e => {
          const rect = element.getBoundingClientRect()
          const inside = (
            lastPosition.x < rect.right && lastPosition.x > rect.left
          ) && (
            lastPosition.y < rect.bottom && lastPosition.y > rect.top
          )

          if (!inside && mouseOver) onLeave()
          else if (inside) onMove(lastPosition.x, lastPosition.y)

        })
      )

      this._subscriptions.add(
        fromEvent(element, 'mousemove').subscribe(e => {
          const event = e as MouseEvent
          onMove(event.clientX, event.clientY)
        })
      )
    })
  }

}
