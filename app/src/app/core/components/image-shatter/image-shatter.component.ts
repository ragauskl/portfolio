import { Component, ElementRef, OnDestroy, Input, HostBinding, Output, EventEmitter, HostListener } from '@angular/core'
import * as THREE from 'three'
import { Subscription, fromEvent } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Scene } from './scene'
import { Image } from './image'
declare var Stats: any

@Component({
  selector: 'app-image-shatter',
  templateUrl: './image-shatter.component.html',
  styleUrls: ['./image-shatter.component.scss']
})
export class ImageShatterComponent implements OnDestroy {
  private _subscriptions = new Subscription()
  @HostBinding('style.cursor')
  private get _cursor () {
    return this.pointer ? 'pointer' : 'default'
  }
  @HostListener('click')
  onClick () {
    if (this.pointer) this.clicked.next()
  }

  @Input() src: string
  @Output() clicked = new EventEmitter()

  scene: Scene
  image: Image

  private _pointer = false
  private _cameraStopTimeout: NodeJS.Timer
  get pointer () {
    return this._pointer
  }
  set pointer (val: boolean) {
    if (val === this._pointer) return
    this._pointer = val
    clearTimeout(this._cameraStopTimeout)
    if (val) this.scene.toggleCameraUpdates.next(true)
    else this._cameraStopTimeout = setTimeout(() => this.scene.toggleCameraUpdates.next(false), 1000)
  }

  private _rendered = false

  constructor (
    private _el: ElementRef<HTMLElement>,
    private _http: HttpClient
  ) {}

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
  }

  render () {
    if (this._rendered) return
    this._rendered = true

    const element = this._el.nativeElement

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
    // this.debugPerformance()
    this._subscriptions.add(
      fromEvent(window, 'resize').subscribe(() => this.scene.onResize())
    )

    this.image = new Image(
      this._http,
      this.src,
      540,
      600,
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
        this.pointer = false
      }

      const onMove = (mouseX: number, mouseY: number) => {
        mouseOver = true

        const rect = element.getBoundingClientRect()
        this.scene.updateMouse(mouseX - rect.left, mouseY - rect.top)

        if (!this.image.matrix) return

        this.scene.ray.copy(this.scene.raycaster.ray).applyMatrix4(this.image.matrix)
        if (!this.scene.ray.intersectBox(this.image.bbox, new THREE.Vector3())) {
          onLeave()
          return
        }
        this.pointer = true

        this.image.rotateToMouse()
      }

      this._subscriptions.add(
        fromEvent(element, 'mouseleave').subscribe(e => {
          onLeave()
          mouseOver = false
        })
      )

      this._subscriptions.add(
        fromEvent(window, 'scroll').subscribe(e => {
          const rect = element.getBoundingClientRect()
          const inside = (
            lastPosition.x < rect.right && lastPosition.x > rect.left
          ) && (
            lastPosition.y < rect.bottom && lastPosition.y > rect.top
          )

          if (!inside && mouseOver) {
            onLeave()
            mouseOver = false
          } else if (inside) onMove(lastPosition.x, lastPosition.y)
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

  private debugPerformance () {
    const upFn: any[] = []
    const rendererStats = RendererStats()
    rendererStats.domElement.style.position = 'fixed'
    rendererStats.domElement.style.left = '0px'
    rendererStats.domElement.style.bottom = '0px'
    document.body.appendChild(rendererStats.domElement)
    upFn.push(() => rendererStats.update(this.scene.renderer))

    const stats	= new Stats()
    stats.domElement.id = 'stats'
    document.body.appendChild(stats.domElement)
    upFn.push(() => stats.update())

    requestAnimationFrame(function animate () {
      requestAnimationFrame(animate)
      upFn.forEach(f => f())
    })
  }
}

const RendererStats	= function () {

  let msMin	= 100
  let msMax	= 0

  let container	= document.createElement('div')
  container.style.cssText = 'width:80px;opacity:0.9;cursor:pointer'

  let msDiv	= document.createElement('div')
  msDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#200;'
  container.appendChild(msDiv)

  let msText	= document.createElement('div')
  msText.style.cssText = 'color:#f00;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px'
  msText.innerHTML = 'WebGLRenderer'
  msDiv.appendChild(msText)

  let msTexts	= []
  let nLines	= 9
  for (let i = 0; i < nLines; i++) {
    msTexts[i]	= document.createElement('div')
    msTexts[i].style.cssText = 'color:#f00;background-color:#311;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px'
    msDiv.appendChild(msTexts[i])
    msTexts[i].innerHTML = '-'
  }

  let lastTime	= Date.now()
  return {
    domElement: container,

    update: function (webGLRenderer) {
			// sanity check
      console.assert(webGLRenderer instanceof THREE.WebGLRenderer)

			// refresh only 30time per second
      if (Date.now() - lastTime < 1000 / 30)	return
      lastTime	= Date.now()

      let i	= 0
      msTexts[i++].textContent = '== Memory ====='
      msTexts[i++].textContent = 'Programs: '	+ webGLRenderer.info.memory.programs
      msTexts[i++].textContent = 'Geometries: ' + webGLRenderer.info.memory.geometries
      msTexts[i++].textContent = 'Textures: '	+ webGLRenderer.info.memory.textures

      msTexts[i++].textContent = '== Render ====='
      msTexts[i++].textContent = 'Calls: '	+ webGLRenderer.info.render.calls
      msTexts[i++].textContent = 'Vertices: '	+ webGLRenderer.info.render.vertices
      msTexts[i++].textContent = 'Faces: '	+ webGLRenderer.info.render.faces
      msTexts[i++].textContent = 'Points: '	+ webGLRenderer.info.render.points
    }
  }
}
