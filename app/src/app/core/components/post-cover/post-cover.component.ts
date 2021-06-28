import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core'
import { Fragment } from './helpers/fragment'
import { Box, getTriangleVertices } from './helpers/utils'

@Component({
  selector: 'app-post-cover',
  templateUrl: './post-cover.component.html',
  styleUrls: ['./post-cover.component.scss']
})
export class PostCoverComponent {

  @Input() src: string
  @Input() width: number
  @Input() height: number
  @Input() text: string = 'Read more'
  @Output() loaded = new EventEmitter()

  @ViewChild('coverContainer') coverContainerRef: ElementRef
  coverContainerEl: HTMLElement
  @ViewChild('imageRef') imageRef: ElementRef
  imageEl: HTMLImageElement
  @ViewChild('shatterContainer') shatterContainerRef: ElementRef
  shatterContainerEl: HTMLElement
  @ViewChild('textRef') textRef: ElementRef
  textEl: HTMLSpanElement

  fragments: Fragment[] = []
  animateTimeout: NodeJS.Timer
  state: 'shattered' | 'initial' | 'shattering' | 'resetting' = 'initial'

  updateCounter = 0
  // Mouse object used to calculate rotation values
  // for child elements
  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (x: number, y: number) {
      this.x = x - this._x
      this.y = (y - this._y) * -1
    },
    setOrigin: function (el: HTMLElement) {
      this._x = Math.floor(el.offsetWidth / 2)
      this._y = Math.floor(el.offsetHeight / 2)
    }
  }

  constructor (private el: ElementRef) {}

  ngAfterViewInit () {
    // Assign Html element references
    this.textEl = this.textRef.nativeElement
    this.shatterContainerEl = this.shatterContainerRef.nativeElement
    this.coverContainerEl = this.coverContainerRef.nativeElement
    this.imageEl = this.imageRef.nativeElement

    // Set requested width x height
    this.el.nativeElement.style.width = `${+this.width + 150 * 2 }px`
    this.el.nativeElement.style.height = `${+this.height + 150 * 2 }px`
    this.coverContainerEl.style.width = `${this.width}px`
    this.coverContainerEl.style.height = `${this.height}px`

    // Set origin (0, 0) from where mouse position/element rotation
    // will be calculated
    this.mouse.setOrigin(this.coverContainerEl)

    // Resize image
    this.resizeImage(this.src, { w: +this.width, h: +this.height }).then(src => {
      this.imageEl.onload = this.initializeFragments.bind(this)
      this.imageEl.src = src
    })

    // Animation shatter trigger
    this.shatterContainerEl.onmouseenter = (event) => {
      this.togglePointerEvents(false)
      this.setAnimationTimeout(() => this.animateShatter(event.offsetX, event.offsetY))
    }

    // Animation reset trigger
    this.coverContainerEl.onmouseleave = () => {
      this.setAnimationTimeout(() => {
        this.resetShatter()
        this.togglePointerEvents(true)
      })
    }

    // Animation rotate trigger
    this.coverContainerEl.onmousemove = (event) => {
      if (this.shouldUpdateSkew()) {
        // Calculate location on image from position on page
        // as mouse move will trigger on child elements
        // resulting in different offsets
        const rect = this.coverContainerEl.getBoundingClientRect()
        this.updateSkew(event.pageX - rect.left, event.pageY - rect.top)
      }
    }
  }

  private setAnimationTimeout (cb: () => void) {
    if (this.animateTimeout) clearTimeout(this.animateTimeout)
    this.animateTimeout = setTimeout(cb, 200)
  }

  private togglePointerEvents (on: boolean) {
    this.shatterContainerEl.style.pointerEvents = on ? '' : 'none'
    this.imageEl.style.pointerEvents = on ? '' : 'none'
  }

  private resizeImage (source: string, size: {w: number, h: number}): Promise<string> {
    const resizeImg = new Image()
    const resizeCanvas: HTMLCanvasElement = document.createElement('canvas')
    const resizeCtx = resizeCanvas.getContext('2d')

    return new Promise((res, rej) => {
      resizeImg.onload = () => {
        // Calculate cropping box
        const original = {
          w: resizeImg.width,
          h: resizeImg.height
        }
        const targetRatio = size.w / size.h
        const cropBox = { w: 0, h: 0, x: 0, y: 0 }
        if (resizeImg.width > resizeImg.height) {
          cropBox.h = resizeImg.height
          cropBox.w = targetRatio * cropBox.h
          cropBox.x = (original.w - cropBox.w) / 2
        } else {
          cropBox.w = resizeImg.width
          cropBox.h = cropBox.w / targetRatio
          cropBox.y = (original.h - cropBox.h) / 2
        }
        // Set new canvas size

        resizeCanvas.style.width = `${size.w}px`
        resizeCanvas.width = size.w
        resizeCanvas.style.height = `${size.h}px`
        resizeCanvas.height = size.h
        // Crop rectangle from original image element and
        // draw it on the new canvas
        resizeCtx.drawImage(resizeImg, cropBox.x, cropBox.y, cropBox.w, cropBox.h, 0, 0, size.w, size.h)

        res(resizeCanvas.toDataURL())
      }
      resizeImg.src = source
    })
  }

  private initializeFragments () {
    const imageBox: Box = {
      x: 0, y: 0,
      w: this.imageEl.clientWidth,
      h: this.imageEl.clientHeight
    }

    const cutOutBox = {
      w: this.textEl.clientWidth + 10,
      h: this.textEl.clientHeight + 10
    } as Box

    cutOutBox.x = imageBox.x + (imageBox.w - cutOutBox.w) / 2
    cutOutBox.y = imageBox.y + (imageBox.h - cutOutBox.h) / 2

    const triangles = getTriangleVertices(this.imageEl.clientWidth, this.imageEl.clientHeight)

    for (const triangle of triangles) {
      const fragment = new Fragment(triangle[0], triangle[1], triangle[2], { ...imageBox }, { ...cutOutBox }, this.imageEl)

      if (fragment.invisible) continue
      this.fragments.push(fragment)
    }
    this.loaded.emit()
  }

  private animateShatter (x: number, y: number) {
    if (this.state === 'shattered' || this.state === 'shattering') return
    this.state = 'shattering'

    for (const fragment of this.fragments) {
      if (this.state !== 'shattering') return
      this.shatterContainerEl.appendChild(fragment.fragmentEl)
    }

    this.imageEl.style.opacity = '0'

    setTimeout(() => {
      if (this.state !== 'shattering') return

      this.fragments.forEach(f => f.animate())
      this.textEl.style.transition = 'all 0.3s linear'

      setTimeout(() => this.textEl.style.opacity = '0.9', 200)

      setTimeout(() => {
        if (this.state !== 'shattering') return
        this.state = 'shattered'
        this.updateSkew(x, y)
      }, 500)
    }, 100)
  }

  private resetShatter () {
    if (this.state === 'initial' || this.state === 'resetting') return
    this.state = 'resetting'

    this.coverContainerEl.style.transform = ''
    this.textEl.style.transition = 'all 0.1s linear'
    this.textEl.style.opacity = '0'
    this.fragments.forEach(f => f.reset())

    setTimeout(() => {
      if (this.state !== 'resetting') return
      this.imageEl.style.opacity = '1'
    }, 499)

    setTimeout(() => {
      for (const fragment of this.fragments) {
        if (this.state !== 'resetting') return
        if (Array.from(this.shatterContainerEl.childNodes).includes(fragment.fragmentEl)) {
          this.shatterContainerEl.removeChild(fragment.fragmentEl)
        }
      }
      this.state = 'initial'
    }, 500)
  }

  private shouldUpdateSkew () {
    return this.updateCounter++ % 2 === 0
  }

  private updateSkew (x: number, y: number) {
    if (this.state !== 'shattered') return
    this.fragments.forEach(f => f.updateSkew(x, y))
    this.mouse.updatePosition(x, y)

    const rotateX = (this.mouse.y / this.coverContainerEl.offsetHeight / 0.5).toFixed(2)
    const rotateY = (this.mouse.x / this.coverContainerEl.offsetWidth / 0.5).toFixed(2)

    this.coverContainerEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }
}
