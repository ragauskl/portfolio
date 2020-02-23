import * as intersects from 'intersects'
import { Box, randomRange, translateToOrigin, calculateNewCentroid, translateToCornerOrigin, Bounds, clamp } from './utils'

export class Fragment {
  fragmentEl: HTMLElement
  canvas: HTMLCanvasElement
  shaddowCnv: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  shaddowCtx: CanvasRenderingContext2D

  cropIntersect = false
  invisible = false

  original = {
    points: [] as [number, number][],
    box: {} as Box
  }
  shattered = {
    points: [] as [number, number][],
    box: {} as Box
  }
  activeBox: Box
  originCenter: {x: number, y: number}
  centroid: {x: number, y: number}

  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (x, y) {
      this.x = x - this._x
      this.y = (y - this._y) * -1
    },
    setOrigin: function (box: Box) {
      this._x = Math.floor(box.w / 2)
      this._y = Math.floor(box.h / 2)
    }
  }

  constructor (v0, v1, v2, parentBox: Box, private parentCrop: Box, private image: HTMLImageElement) {
    this.original.points = [[...v0] as any, [...v1] as any, [...v2] as any]

    this.originCenter = {
      x: parentBox.x + parentBox.w / 2,
      y: parentBox.y + parentBox.h / 2
    }

    this.computeBoundingBox()

    if (!this.invisible) {
      this.computeCentroid()
      this.createCanvas()
      this.clip()

      this.mouse.setOrigin(this.activeBox)
      this.createOffset()
      this.setIntersect()
    }
  }

  private setIntersect () {
    const bounds: Bounds = {
      minX: this.parentCrop.x,
      maxX: this.parentCrop.x + this.parentCrop.w,
      minY: this.parentCrop.y,
      maxY: this.parentCrop.y + this.parentCrop.h
    }
    const pol = []
    for (const point of this.shattered.points) {
      pol.push(...point)
    }
    this.cropIntersect = intersects.polygonPolygon(
      pol,
      [bounds.minX, bounds.minY, bounds.maxX, bounds.minY, bounds.maxX, bounds.maxY, bounds.minX, bounds.maxY]
    )
  }

  animate () {
    if (this.invisible) return
    if (this.cropIntersect) {
      this.fragmentEl.style.opacity = '0'
      this.fragmentEl.style.transition = 'all 0.1s linear'
    } else {
      this.fragmentEl.style.opacity = '0.95'
      this.fragmentEl.style.transition = `all 0.3s linear`
    }

    this.fragmentEl.style.transform = `rotate(${randomRange(-30, 30)}deg)`
    this.activeBox.x = this.shattered.box.x
    this.activeBox.y = this.shattered.box.y
    this.shaddowCnv.style.opacity = '0.5'

    this.moveCanvas()

  }
  updateSkew (x, y) {
    if (this.invisible) return
    this.mouse.updatePosition(x, y)
    this.updateTransformStyle(
      (this.mouse.y / this.fragmentEl.offsetHeight / 0.5).toFixed(2),
      (this.mouse.x / this.fragmentEl.offsetWidth / 0.5).toFixed(2)
    )
  }
  updateTransformStyle (x, y) {
    if (this.invisible) return
    const clampV = 20
    x = clamp(x, -clampV, clampV)
    y = clamp(y, -clampV, clampV)

    const transformCss = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'
    // Enable in case safari z index breaks
    this.canvas.style.transformStyle = 'preserve-3d'
    this.shaddowCnv.style.transformStyle = 'preserve-3d'
    this.canvas.style.transform = `${transformCss}`
    this.shaddowCnv.style.transform = `scale(1.2) ${transformCss}`
  }
  reset () {
    if (this.invisible) return
    this.fragmentEl.style.transition = 'all 0.3s linear'
    this.fragmentEl.style.opacity = '1'
    this.activeBox.x = this.original.box.x
    this.activeBox.y = this.original.box.y
    this.shaddowCnv.style.opacity = '0'

    this.fragmentEl.style.transform = ''
    this.canvas.style.transform = ''
    this.shaddowCnv.style.transform = 'scale(1.2)'
    this.moveCanvas()
  }

  private computeBoundingBox () {
    const xMin = Math.min(...this.original.points.map(x => x[0]))
    const xMax = Math.max(...this.original.points.map(x => x[0]))
    const yMin = Math.min(...this.original.points.map(x => x[1]))
    const yMax = Math.max(...this.original.points.map(x => x[1]))

    this.activeBox = { ...this.original.box } = {
      x: xMin, y: yMin,
      w: xMax - xMin,
      h: yMax - yMin
    }

    this.invisible = this.activeBox.w === 0 || this.activeBox.h === 0
  }

  private computeCentroid () {
    const x = this.original.points.reduce((sum, x) => sum + x[0], 0) / this.original.points.length
    const y = this.original.points.reduce((sum, x) => sum + x[1], 0) / this.original.points.length

    this.centroid = { x, y }
  }

  createOffset () {
    const translatedCentroid = translateToOrigin(this.centroid.x, this.centroid.y, this.originCenter.x, this.originCenter.y)
    const newCentroid = calculateNewCentroid(translatedCentroid.x, translatedCentroid.y)
    const centroid = translateToCornerOrigin(newCentroid.x, newCentroid.y, this.originCenter.x, this.originCenter.y)

    const diff = {
      x: this.centroid.x - centroid.x,
      y: this.centroid.y - centroid.y
    }

    this.shattered.box = { ...this.original.box }
    this.shattered.box.x -= diff.x
    this.shattered.box.y -= diff.y
    this.shattered.points = [...this.original.points].map(coord => [coord[0] - diff.x, coord[1] - diff.y] as [number, number])
  }

  private createCanvas () {
    this.fragmentEl = document.createElement('div')
    this.fragmentEl.style.position = 'absolute'
    this.fragmentEl.style.perspective = '70px'
    this.fragmentEl.className = 'fragment'
    this.fragmentEl.style.pointerEvents = 'none'
    this.fragmentEl.style.width = this.activeBox.w + 'px'
    this.fragmentEl.style.height = this.activeBox.h + 'px'
    this.fragmentEl.style.left = this.activeBox.x + 'px'
    this.fragmentEl.style.top = this.activeBox.y + 'px'

    this.shaddowCnv = document.createElement('canvas')
    this.shaddowCnv.style.position = 'absolute'
    this.fragmentEl.appendChild(this.shaddowCnv)
    this.shaddowCnv.style.opacity = '0'
    this.shaddowCnv.style.transition = 'opacity 0.2s linear'
    this.shaddowCnv.style.filter = 'blur(5px)'
    this.shaddowCnv.style.transform = 'scale(1.2)'
    this.canvas = document.createElement('canvas')
    this.canvas.style.position = 'absolute'
    this.fragmentEl.appendChild(this.canvas)

    this.canvas.width = this.activeBox.w
    this.canvas.style.transition = 'opacity 0.2s linear'
    // this.canvas.style.transformStyle = 'flat'
    this.canvas.height = this.activeBox.h
    this.canvas.style.width = this.activeBox.w + 'px'
    this.canvas.style.height = this.activeBox.h + 'px'
    this.canvas.style.left = '0px'
    this.canvas.style.top = '0px'
    this.ctx = this.canvas.getContext('2d')

    this.shaddowCnv.width = this.activeBox.w
    this.shaddowCnv.height = this.activeBox.h
    this.shaddowCnv.style.width = this.activeBox.w + 'px'
    this.shaddowCnv.style.height = this.activeBox.h + 'px'
    this.shaddowCnv.style.left = '0px'
    this.shaddowCnv.style.top = '0px'
    this.shaddowCtx = this.shaddowCnv.getContext('2d')

    let dx = this.centroid[0] - this.originCenter.x
    let dy = this.centroid[1] - this.originCenter.y
    let d = Math.sqrt(dx * dx + dy * dy)
    this.fragmentEl.style.zIndex = Math.floor(d).toString()
  }

  private moveCanvas () {
    if (this.invisible) return
    this.fragmentEl.style.left = this.activeBox.x + 'px'
    this.fragmentEl.style.top = this.activeBox.y + 'px'
  }

  private clip () {
    this.ctx.translate(-this.activeBox.x, -this.activeBox.y)
    this.ctx.beginPath()
    this.ctx.moveTo(...this.original.points[0])
    for (let i = 1; i < this.original.points.length; i++) {
      this.ctx.lineTo(...this.original.points[i])
    }
    this.ctx.closePath()
    this.ctx.clip()

    this.shaddowCtx.translate(-this.activeBox.x, -this.activeBox.y)
    this.shaddowCtx.beginPath()

    this.shaddowCtx.moveTo(...this.original.points[0])
    for (let i = 1; i < this.original.points.length; i++) {
      this.shaddowCtx.lineTo(...this.original.points[i])
    }
    this.shaddowCtx.closePath()
    this.shaddowCtx.clip()
    if (this.image) {
      this.ctx.drawImage(this.image, 0, 0)
    }

    this.shaddowCtx.fillStyle = `rgba(0,0,0,1)`
    this.shaddowCtx.fill()
  }

}
