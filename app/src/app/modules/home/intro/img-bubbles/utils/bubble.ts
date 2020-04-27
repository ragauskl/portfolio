import { IconMeta, map, describeArc, scaleCoordinate, angleBetweenPoints } from './bubble-utils'
import browserUtil from '@core/utils/browser.util'

export default class Bubble {
  noiseSeedX = Math.floor(Math.random() * 64000)
  noiseSeedY = Math.floor(Math.random() * 64000)
  xWithNoise
  yWithNoise
  elContainer: HTMLElement
  el: HTMLElement
  imageSprite: HTMLElement
  imageClipX = 0
  diameter: number
  backImage: HTMLElement

  constructor (
    public i: number,
    public step: number,
    public offset: 'p' | 'n',
    public x: number,
    public y: number,
    public size: number,
    public scale: number,
    public itemLeft: IconMeta,
    public itemRight: IconMeta
  ) {
    this.diameter = this.size * this.scale
    // Add random increment to x and y, that are in bounds of a 'rectangle'
    // respecting inner padding (so that circles don't overflow each other)
    const minInnerX = this.size * 0.10
    const maxInnerX = this.size * 0.90 - this.diameter
    const randX = map(Math.random(), 0, 1, minInnerX, maxInnerX)
    const randY = map(Math.random(), 0, 1, minInnerX, maxInnerX)

    this.xWithNoise = x + randX
    this.yWithNoise = x + randY

    this.elContainer = document.createElement('div')
    this.elContainer.className = 'bubble-container'
    this.elContainer.style.width = this.elContainer.style.height = `${this.diameter}px`

    this.el = document.createElement('div')
    this.el.className = 'bubble'
    this.el.style.width = this.el.style.height = `100%`
    this.elContainer.appendChild(this.el)

    const iLeft = document.createElement('img')
    iLeft.src = itemLeft.src
    iLeft.classList.add('back')
    // const iLeft = document.createElement('div')
    // iLeft.classList.add('back', 'sprite', itemLeft.sprite)

    this.backImage = iLeft
    const iRight = document.createElement('img')
    iRight.src = itemRight.src
    // const iRight = document.createElement('div')
    // iRight.classList.add('sprite', itemRight.sprite)

    iLeft.draggable = iRight.draggable = false

    const rightTitle = this.GenerateTitle(itemRight.title)
    const leftTitle = this.GenerateTitle(itemLeft.title)
    leftTitle.svgEl.classList.add('back')

    this.el.appendChild(iRight)
    this.el.appendChild(rightTitle.svgEl)
    this.el.appendChild(iLeft)
    this.el.appendChild(leftTitle.svgEl)

    setTimeout(() => {
      rightTitle.afterRenderCb()
      leftTitle.afterRenderCb()
    }, 1)
    this.transform()
  }

  redraw (x: number, y: number, size: number) {
    this.size = size

    this.diameter = this.size * this.scale
    // Add random increment to x and y, that are in bounds of a 'rectangle'
    // respecting inner padding (so that circles don't overflow eachother)
    const minInnerX = this.size * 0.10
    const maxInnerX = this.size * 0.90 - this.diameter
    const randX = map(Math.random(), 0, 1, minInnerX, maxInnerX)
    const randY = map(Math.random(), 0, 1, minInnerX, maxInnerX)
    this.x = x
    this.y = y

    this.xWithNoise = x + randX
    this.yWithNoise = y + randY

    this.elContainer.style.width = this.elContainer.style.height = `${this.diameter}px`

    this.el.style.width = this.el.style.height = `100%`

    this.transform()
  }

  private GenerateTitle (title: string) {
    const titleSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    titleSvg.setAttribute('version', '1.1')
    titleSvg.setAttribute('xlink', 'http://www.w3.org/1999/xlink')
    titleSvg.setAttribute('viewBox', '0 0 100 100')

    const padding = 5
    const titleHeight = 16 + 5

    const arc = 50 + padding + (titleHeight * 0.2)
    const arcCenter = 50 + padding + (titleHeight * 0.5)
    const circlePath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    circlePath.id = 'curve'
    circlePath.setAttribute('d', `${describeArc(50, 50, arc, 0, 180, 1)} ${describeArc(50, 50, arc, 180, 0, 1)}`)
    circlePath.setAttribute('fill', 'none')
    circlePath.setAttribute('stroke', 'none')
    titleSvg.appendChild(circlePath)

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    const textPath: SVGTextPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'textPath') as any
    textPath.setAttribute('startOffset', '50%')
    textPath.setAttribute('text-anchor', 'middle')
    textPath.setAttribute('href', '#curve')
    textPath.textContent = title
    text.appendChild(textPath)
    titleSvg.appendChild(text)

    return {
      svgEl: titleSvg,
      afterRenderCb: () => {
        const firstExtent = textPath.getExtentOfChar(0)
        const lastExtent = textPath.getExtentOfChar(title.length - 1)

        const min = {
          x: firstExtent.x,
          y: firstExtent.y + firstExtent.height
        }
        const max = {
          x: lastExtent.x + lastExtent.width,
          y: lastExtent.y + lastExtent.height
        }
        const origin = {
          x: 50,
          y: 50
        }
        const snappedMin = scaleCoordinate(min, origin, 50)
        const snappedMax = scaleCoordinate(max, origin, 50)

        const curveDegree = Math.abs(angleBetweenPoints(snappedMin, snappedMax, origin)) / 2

        const textBackground: SVGPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path') as any
        textBackground.setAttribute('d', describeArc(50, 50, arcCenter, 360 - curveDegree, curveDegree, 0))
        textBackground.setAttribute('fill', 'none')
        textBackground.setAttribute('stroke-linecap', 'round')
        textBackground.setAttribute('stroke-width', `${titleHeight}px`)
        textBackground.setAttribute('stroke', 'white')

        titleSvg.insertBefore(textBackground, text)
      }
    }
  }

  transform () {
    const xCenter = Math.min(this.size, Math.max(0, this.imageClipX))
    const percentage = xCenter * 100 / this.size
    let rotate = percentage < 40 ? 0 :
    percentage > 60 ? 180 : map(percentage, 40, 60, 0, 180 + 360)
    rotate = rotate % 360
    this.elContainer.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px)`

    if (!browserUtil.disableAnimations) this.el.style.transform = `rotateY(${rotate}deg)`
  }
}
