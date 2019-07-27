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
  @ViewChild('bubblesLeft', { static: false }) bubblesLeft!: ElementRef<HTMLElement>
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
    private _http: HttpClient
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
      this.bubblesLeft.nativeElement.clientHeight / 2,
      20,
      20
    )
    //
    const rectangles: Rectangle[] = []
    rectangles.push(this.rectangleGen.next().value)
    while (rectangles[rectangles.length - 1].x < this.bubblesLeft.nativeElement.clientWidth) {
      rectangles.push(this.rectangleGen.next(rectangles[rectangles.length - 1]).value)
    }

    const update = () => {
        // Call each individual bubble's update method
      rectangles.forEach(r => {
        r.noiseSeedX += NOISE_SPEED
        r.noiseSeedY += NOISE_SPEED
        const noise = new (Noise as any).Noise()
        const randomX = noise.simplex2(r.noiseSeedX, 0)
        const randomY = noise.simplex2(r.noiseSeedY, 0)

        r.x -= SCROLL_SPEED
        r.xWithNoise = r.x + (randomX * NOISE_AMOUNT)
        r.yWithNoise = r.y + (randomY * NOISE_AMOUNT)

        r.transform()
      })

      const last = rectangles[rectangles.length - 1]
      if (last.x + (last.size / 2) + 20 <= this.bubblesLeft.nativeElement.clientWidth + last.size) {
        const bubble = this.rectangleGen.next(last).value
        rectangles.push(bubble)
        this.bubblesLeft.nativeElement.appendChild(bubble.el)
      }

      const first = rectangles[0]
      if (first.x < -first.size - 20) {
        rectangles.splice(0, 1)
        this.bubblesLeft.nativeElement.removeChild(first.el)
      }
      // Queue up another update() method call on the next frame
      if (this.action.stop) return
      requestAnimationFrame(update)
    }

    for (const r of rectangles) {
      this.bubblesLeft.nativeElement.appendChild(r.el)
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
      yield `assets/icons/skills/jpg/devops/${this.skills.devops[i]}`
    }
  }

  *nextScale (): IterableIterator<number> {
    const scales = shuffle([1, 0.9, 0.8, 0.7, 0.6, 0.5])
    const usedScales = []

    while (true) {
      const [val] = scales.splice(0, 1)
      usedScales.push(val)
      if (scales.length <= 2) scales.push(...usedScales.splice(0))
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
        this.scaleGen.next().value
      )

      const img = document.createElement('img')
      img.src = this.devSkillGen.next().value
      rect.el.appendChild(img)
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
  constructor (
    public i: number,
    public step: number,
    public offset: 'p' | 'n',
    public x: number,
    public y: number,
    public size: number,
    public scale: number
  ) {
    const diameter = this.size * this.scale
    // Add random increment to x and y, that are in bounds of a 'rectangle'
    // respecting inner padding (so that circles don't overflow eachother)
    const minInnerX = this.size
    const maxInnerX = this.size - diameter
    const randX = map(Math.random(), 0, 1, minInnerX, maxInnerX)
    const randY = map(Math.random(), 0, 1, minInnerX, maxInnerX)
    x += randX
    y += randY

    this.xWithNoise = x
    this.yWithNoise = y

    this.el = document.createElement('div')
    this.el.className = 'bubble'
    this.el.style.position = 'absolute'
    this.el.style.width = this.el.style.height = `${diameter}px`
    this.transform()
  }

  transform () {
    this.el.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px)`
  }
}
// ---

interface SkillsConfig {
  development: Skill[]
  devops: Skill[]
}

interface Skill {
  title: string
  src: string
}
