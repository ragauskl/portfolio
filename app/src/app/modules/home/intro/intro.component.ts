import { Component, ViewChild, ElementRef, AfterViewInit, HostBinding, HostListener } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import Noise from 'noisejs'
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

  action = {
    stop: false
  }

  constructor (
  private _http: HttpClient
 ) {}

  ngAfterViewInit () {
    this._http.get('assets/skills.json').subscribe((json: SkillsConfig) => {
      const maxItems = Math.max(json.development.length, json.devops.length)
      const rectangles = this.createRectangles(
        150, 0,
        this.bubblesLeft.nativeElement.clientHeight / 2,
        20,
        20,
        maxItems
      )

      const update = () => {
        // Call each individual bubble's update method
        rectangles.forEach(r => r.update())
        // Queue up another update() method call on the next frame
        if (this.action.stop) return
        requestAnimationFrame(update)
      }
      let skillIndex = 0
      for (const r of rectangles) {
        const img = document.createElement('img')
        const skill = json.devops[skillIndex]
        img.src = `assets/icons/skills/jpg/devops/${skill.src}`
        r.el.appendChild(img)
        this.bubblesLeft.nativeElement.appendChild(r.el)
        skillIndex++
        if (skillIndex === json.development.length) skillIndex = 0
      }

      update()
    })
  }

  createRectangles (size: number, startX: number, startY: number, xPadding: number, yOffset: number, itemCount: number): Rectangle[] {
    const minWidth = this.bubblesLeft.nativeElement.clientWidth
    let y = startY + yOffset
    let left = startX + size
    let right: number
    const items: Rectangle[] = []
    const scales = shuffle([1, 0.9, 0.8, 0.7, 0.6, 0.5])
    const usedScale = []
    const padding = () => xPadding * items.length
    const scale = () => {
      const [val] = scales.splice(0, 1)
      usedScale.push(val)
      if (scale.length <= 2) scales.push(...usedScale.splice(0))
      return val
    }

    let step = 1
    for (let i = 1; true; i++) {
      console.log('i:', i)
      let bubble = { x: undefined, y: undefined }
      if (step === 1) {
        bubble = {
          x: left - size + padding(),
          y: y > startY ? y : y - size
        }
      } else if (step === 2) {
        bubble = {
          x: left - size / 2 + padding(),
          y: y > startY ? y - size : y
        }
      } else if (step === 3) {
        bubble = {
          x: left + padding(),
          y: y > startY ? y : y - size
        }
      }

      items.push(new Rectangle(
        items.length,
        bubble.x,
        bubble.y,
        size,
        scale()
      ))

      right = bubble.x + size
      RIGHT = right
      // TODO: increase element count
      // TODO: Adjust next icon loop
      if (right >= minWidth && i >= itemCount && (y > startY ? step === 2 : step === 3)) {
        break
      }

      step++
      if (step > 3) {
        step = 1
        left += size * 1.5
        y = startY + (y > startY ? -yOffset : +yOffset)
      }
    }

    return items
  }

}
let RIGHT = 0
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
class Rectangle {
  noiseSeedX = Math.floor(Math.random() * 64000)
  noiseSeedY = Math.floor(Math.random() * 64000)
  xWithNoise
  yWithNoise
  el: HTMLElement
  constructor (
    public i: number,
    public x: number,
    public y: number,
    public size: number,
    public scale: number
  ) {
    const diameter = this.size * this.scale
    const innerPadding = 0.05
    // Add random increment to x and y, that are in bounds of a 'rectangle'
    // respecting inner padding (so that circles don't overflow eachother)
    const minInnerX = this.size * innerPadding
    const maxInnerX = this.size * (1 - innerPadding) - diameter
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
    this.Transform()
  }

  private Transform () {
    this.el.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px)`
  }

  update () {
    this.noiseSeedX += NOISE_SPEED
    this.noiseSeedY += NOISE_SPEED
    const noise = new (Noise as any).Noise()
    const randomX = noise.simplex2(this.noiseSeedX, 0)
    const randomY = noise.simplex2(this.noiseSeedY, 0)

    this.x -= SCROLL_SPEED
    this.xWithNoise = this.x + (randomX * NOISE_AMOUNT)
    this.yWithNoise = this.y + (randomY * NOISE_AMOUNT)

    console.log(':', RIGHT, this.el.parentElement.clientWidth, this.el.parentElement.clientWidth - RIGHT + ((150 - 20) / 2))
    if (this.x < this.el.parentElement.clientWidth - RIGHT + ((150 - 20) / 2)) {
      this.x = this.el.parentElement.clientWidth
    }

    this.Transform()
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
