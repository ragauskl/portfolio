import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import Noise from 'noisejs'

const NOISE_SPEED = 0.005 // The frequency. Smaller for flat slopes, higher for jagged spikes.
const NOISE_AMOUNT = 5    // The amplitude. The amount the noise affects the movement.
const SCROLL_SPEED = 0.4

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
      this.loadBubbles()
    })
  }

  loadBubbles () {
    this.rectangleGen = this.nextRectangle(
      150,
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
        this.bubbles.nativeElement.appendChild(bubble.el)
      }

      const first = rectangles[0]
      if (first.x < -first.size - 20) {
        rectangles.splice(0, 1)
        this.bubbles.nativeElement.removeChild(first.el)
      }
      // Queue up another update() method call on the next frame
      if (this.action.stop) return
      requestAnimationFrame(update)
    }

    for (const r of rectangles) {
      this.bubbles.nativeElement.appendChild(r.el)
    }

    update()
  }

  *nextDevelopmentSkill (): IterableIterator<string> {
    let i = -1

    while (true) {
      i++
      if (i === this.skills.development.length) i = 0
      yield `assets/icons/skills/jpg/development/${this.skills.development[i].src}`
    }
  }

  *nextDevopsSkill (): IterableIterator<string> {
    let i = -1

    while (true) {
      i++
      if (i === this.skills.devops.length) i = 0
      yield `assets/icons/skills/jpg/devops/${this.skills.devops[i].src}`
    }
  }

  *nextScale (): IterableIterator<number> {
    const scales = shuffle([1, 0.9, 0.8, 0.7, 0.6, 0.5])
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
  el: HTMLElement
  imageSprite: HTMLElement
  imageClipX = 0
  diameter: number
  clippedImage: HTMLElement
  constructor (
    public i: number,
    public step: number,
    public offset: 'p' | 'n',
    public x: number,
    public y: number,
    public size: number,
    public scale: number,
    public imgLeft: string,
    public imgRight: string
  ) {
    this.diameter = this.size * this.scale
    // Add random increment to x and y, that are in bounds of a 'rectangle'
    // respecting inner padding (so that circles don't overflow eachother)
    const minInnerX = this.size * 0.05
    const maxInnerX = this.size * 0.95 - this.diameter
    const randX = map(Math.random(), 0, 1, minInnerX, maxInnerX)
    const randY = map(Math.random(), 0, 1, minInnerX, maxInnerX)
    x += randX
    y += randY

    this.xWithNoise = x
    this.yWithNoise = y

    this.el = document.createElement('div')
    this.el.className = 'bubble'
    this.el.style.position = 'absolute'
    this.el.style.width = this.el.style.height = `${this.diameter}px`

    const iLeft = document.createElement('img')
    iLeft.src = imgLeft
    const iRight = document.createElement('img')
    iRight.src = imgRight

    iLeft.style.width = iLeft.style.height = iRight.style.width = iRight.style.height = `${this.diameter}px`
    iLeft.style.position = iRight.style.position = 'absolute'
    iLeft.style.top = iLeft.style.left = iRight.style.top = iRight.style.left = '0'

    this.el.appendChild(iLeft)
    this.el.appendChild(iRight)
    this.clippedImage = iRight
    this.transform()
  }

  transform () {
    this.el.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px)`
    this.clippedImage.style.clipPath = `inset(0 0 0 ${Math.min(this.diameter, Math.max(0, this.imageClipX))}px)`
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
