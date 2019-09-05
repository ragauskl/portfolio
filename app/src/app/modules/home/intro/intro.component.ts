import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import Noise from 'noisejs'

const NOISE_SPEED = 0.005 // The frequency. Smaller for flat slopes, higher for jagged spikes.
const NOISE_AMOUNT = 5    // The amplitude. The amount the noise affects the movement.
const SCROLL_SPEED = 0.4
type IconMeta = {src: string, title: string}

const map = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}

function shuffle (array) {
  let currentIndex = array.length
  let temporaryValue: any
  let randomIndex: number

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements AfterViewInit {
  @ViewChild('bubbles', { static: false }) bubbles!: ElementRef<HTMLElement>

  @HostListener('window:keyup', ['$event'])
  onKeyUp (e: KeyboardEvent) {
    if (e.code === 'Space') {
      this.action.stop = true
    }
  }
  skills!: SkillsConfig
  devSkillGen = this.nextDevelopmentSkill()
  opsSkillGen = this.nextDevopsSkill()
  scaleGen = this.nextScale()
  rectangleGen!: IterableIterator<Rectangle>
  action = {
    stop: false
  }

  constructor (
    private _http: HttpClient,
    private _el: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit () {
    this._http.get('assets/skills.json').subscribe((json: SkillsConfig) => {
      this.skills = json
      // this.loadBubbles()
    })
  }

  loadBubbles () {
    this.rectangleGen = this.nextRectangle(
      170,
      this._el.nativeElement.clientHeight / 2,
      20,
      20
    )

    const rectangles: Rectangle[] = []
    rectangles.push(this.rectangleGen.next().value)
    while (rectangles[rectangles.length - 1].x < this._el.nativeElement.clientWidth) {
      rectangles.push(this.rectangleGen.next(rectangles[rectangles.length - 1]).value)
    }

    const update = () => {
      const midX = this._el.nativeElement.clientWidth * 0.5
        // Call each individual bubble's update method
      for (const r of rectangles) {
        r.noiseSeedX += NOISE_SPEED
        r.noiseSeedY += NOISE_SPEED
        const noise = new (Noise as any).Noise()
        const randomX = noise.simplex2(r.noiseSeedX, 0)
        const randomY = noise.simplex2(r.noiseSeedY, 0)

        r.x -= SCROLL_SPEED
        r.xWithNoise = r.x + (randomX * NOISE_AMOUNT)
        r.yWithNoise = r.y + (randomY * NOISE_AMOUNT)

        r.imageClipX = midX - r.xWithNoise

        r.transform()
      }

      const last = rectangles[rectangles.length - 1]
      if (last.x + (last.size / 2) + 20 <= this.bubbles.nativeElement.clientWidth + last.size) {
        const bubble = this.rectangleGen.next(last).value
        rectangles.push(bubble)
        this.bubbles.nativeElement.appendChild(bubble.elContainer)
      }

      const first = rectangles[0]
      if (first.x < -first.size - 20) {
        rectangles.splice(0, 1)
        this.bubbles.nativeElement.removeChild(first.elContainer)
      }
      // Queue up another update() method call on the next frame
      if (this.action.stop) return
      requestAnimationFrame(update)
    }

    for (const r of rectangles) {
      this.bubbles.nativeElement.appendChild(r.elContainer)
    }

    update()
  }

  *nextDevelopmentSkill (): IterableIterator<IconMeta> {
    let i = -1

    while (true) {
      i++
      if (i === this.skills.development.length) i = 0
      yield {
        src: `assets/icons/skills/jpg/development/${this.skills.development[i].src}`,
        title: this.skills.development[i].title
      }
    }
  }

  *nextDevopsSkill (): IterableIterator<IconMeta> {
    let i = -1

    while (true) {
      i++
      if (i === this.skills.devops.length) i = 0
      yield {
        src: `assets/icons/skills/jpg/devops/${this.skills.devops[i].src}`,
        title: this.skills.devops[i].title
      }
    }
  }

  *nextScale (): IterableIterator<number> {
    const scales = shuffle([0.95, 0.85, 0.75, 0.65, 0.55]) // shuffle([1, 0.9, 0.8, 0.7, 0.6, 0.5])
    const usedScales = []

    while (true) {
      const [val] = scales.splice(0, 1)
      usedScales.push(val)
      if (scales.length <= 2) scales.push(...shuffle(usedScales.splice(0)))
      yield val
    }
  }

  *nextRectangle (size: number, startY: number, xPadding: number, yOffset: number): IterableIterator<Rectangle> {
    let y = startY + yOffset
    const calcY = () => {
      if (step === 1 || step === 3) return y > startY ? y : y - size
      else return y > startY ? y - size : y
    }
    let step = 1
    let prevBubble: Rectangle | undefined
    for (let i = 1; true; i++) {
      let bubble = { x: undefined, y: undefined }
      bubble = {
        x: (prevBubble ? prevBubble.x + (size / 2) : 0) + xPadding,
        y: calcY()
      }

      const rect = new Rectangle(
        i,
        step,
        y > startY ? 'p' : 'n',
        bubble.x,
        bubble.y,
        size,
        this.scaleGen.next().value,
        this.devSkillGen.next().value,
        this.opsSkillGen.next().value
      )

      prevBubble = yield rect

      step++
      if (step > 3) {
        step = 1
        y = startY + (y > startY ? -yOffset : +yOffset)
      }
    }
  }
}

class Rectangle {
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
    // respecting inner padding (so that circles don't overflow eachother)
    const minInnerX = this.size * 0.10
    const maxInnerX = this.size * 0.90 - this.diameter
    const randX = map(Math.random(), 0, 1, minInnerX, maxInnerX)
    const randY = map(Math.random(), 0, 1, minInnerX, maxInnerX)
    x += randX
    y += randY

    this.xWithNoise = x
    this.yWithNoise = y

    this.elContainer = document.createElement('div')
    this.elContainer.className = 'bubble-container'
    this.elContainer.style.width = this.elContainer.style.height = `${this.diameter}px`

    this.el = document.createElement('div')
    this.el.className = 'bubble'
    this.el.style.width = this.el.style.height = `100%`
    this.elContainer.appendChild(this.el)

    const iLeft = document.createElement('img')
    iLeft.src = itemLeft.src
    iLeft.className = 'back'
    this.backImage = iLeft
    const iRight = document.createElement('img')
    iRight.src = itemRight.src

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
        // console.log('\n\n')
        const origin = {
          x: 50,
          y: 50
        }
        const snappedMin = scaleCoordinate(min, origin, 50)
        const snappedMax = scaleCoordinate(max, origin, 50)

        // const addCircle = (c: Coordinate, fill: string = 'none') => {
        //   const circleStart = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        //   circleStart.setAttribute('cx', `${c.x}`)
        //   circleStart.setAttribute('cy', `${c.y}`)
        //   circleStart.setAttribute('r', '2')
        //   circleStart.setAttribute('fill', fill)
        //   titleSvg.appendChild(circleStart)
        // }
        // addCircle(snappedMin, 'orange')
        // addCircle(snappedMax, 'orange')

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
    this.el.style.transform = `rotateY(${rotate}deg)`
  }
}

interface SkillsConfig {
  development: Skill[]
  devops: Skill[]
}

interface Skill {
  title: string
  src: string
}

function polarToCartesian (centerX, centerY, radius, angleInDegrees) {
  let angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  }
}

function describeArc (x, y, radius, startAngle, endAngle, direction: 0 | 1) {

  let start = polarToCartesian(x, y, radius, endAngle)
  let end = polarToCartesian(x, y, radius, startAngle)

  let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  let d = [
        'M', start.x, start.y,
        'A', radius, radius, direction, largeArcFlag, direction, end.x, end.y
    ].join(' ')

  return d
}

function angleBetweenPoints (p1: Coordinate, p2: Coordinate, c: Coordinate) {
  p1 = {
    x: p1.x - c.x,
    y: p1.y - c.y
  }
  p2 = {
    x: p2.x - c.x,
    y: p2.y - c.y
  }

  const a2 = Math.atan2(p1.y, p1.x)
  const a1 = Math.atan2(p2.y, p2.x)

  const sign = a1 > a2 ? 1 : -1
  let angle = a1 - a2
  const K = -sign * Math.PI * 2
  angle = (Math.abs(K + angle) < Math.abs(angle)) ? K + angle : angle

  let deg = Math.abs(Math.round(360 * angle / (Math.PI * 2)))

  if (deg < 0) deg = 360 + deg
  return deg
}

function distanceBetweenPoints (p1: Coordinate, p2: Coordinate) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
}

function scaleCoordinate (p: Coordinate, origin: Coordinate, distance: number) {
  const xLen = origin.x - p.x
  const yLen = origin.y - p.y

  const currDistance = distanceBetweenPoints(p, origin)
  const ratio = distance / currDistance

  const smallerXLength = xLen * ratio
  const smallerYLength = yLen * ratio

  return {
    x: p.x + (xLen - smallerXLength),
    y: p.y + (yLen - smallerYLength)
  }
}

type Coordinate = {x: number, y: number}
