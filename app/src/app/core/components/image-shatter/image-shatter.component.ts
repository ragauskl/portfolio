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
          this.scene.updateLight()
        } else if ((e as KeyboardEvent).key === 'r') {
          this.image.resetRotation()
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
          this.image.resetRotation()
        })
      )

      this._subscriptions.add(
        fromEvent(element, 'mousemove').subscribe(e => {
          this.image.changeToState('shattered')

          const event = e as MouseEvent
          const rect = element.getBoundingClientRect()
          this.scene.mouse.updatePosition(event.clientX - rect.left, event.clientY - rect.top)

          this.image.rotateToMouse()
        })
      )
    })
  }

}
