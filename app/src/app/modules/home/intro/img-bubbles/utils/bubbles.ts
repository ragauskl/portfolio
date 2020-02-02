import { IconMeta, shuffle, SkillsConfig } from './bubble-utils'
import Bubble from './bubble'
import Noise from 'noisejs'

export class Bubbles {
  pixelRatioMultiplier = Math.max(window.devicePixelRatio - 1, 1)

  get scrollSpeed () {
    return Math.max(Math.min(this.size * 0.002, 0.4), 0.05) * this.pixelRatioMultiplier
  }

  get noiseAmount () {
    return this.size * 0.03 * this.pixelRatioMultiplier
  }

  get noiseSpeed () {
    return this.noiseAmount / 1000
  }

  list: Bubble[] = []
  size: number
  xPadding: number
  yPadding: number

  curr = {
    step: 0,
    y: undefined
  }

  scaleGen = this.nextScale()
  devSkillGen = this.nextDevelopmentSkill()
  opsSkillGen = this.nextDevopsSkill()

  state: 'running' | 'stop requested' | 'stopped'

  get midY () {
    return this.el.clientHeight / 2
  }

  get last () {
    return this.list[this.list.length - 1]
  }

  get midX () {
    return this.el.clientWidth * 0.5
  }

  constructor (
    public el: HTMLElement,
    public skills: SkillsConfig
  ) {
    this.updateSize()
    this.updatePadding()
    this.init()
  }

  updateSize () {
    this.size = Math.round(this.el.clientHeight * 0.34)
  }

  updatePadding () {
    this.xPadding = Math.max(10, Math.round(this.size * 0.15))
    this.yPadding = Math.max(10, Math.round(this.size * 0.17))
  }

  async stateChanged (expected: string) {
    while (this.state !== expected) {
      await new Promise(res => setTimeout(res, 100))
    }
  }

  async stopAnimation () {
    if (this.state !== 'stopped') {
      this.state = 'stop requested'
      await this.stateChanged('stopped')
    }
  }

  startAnimation () {
    if (this.state !== 'running') {
      this.state = 'running'
      this.nextFrame()
    }
  }

  async resize () {
    await this.stopAnimation()
    const first = this.list[0]

    const setBack = {
      x: first.x - (this.size * 0.6),
      step: first.step !== 1 ? first.step - 1 : 3,
      offset: first.step !== 1 ? first.offset : (
        first.offset === 'p' ? 'n' : 'p'
      )
    }

    this.curr.y = this.midY + (
    (setBack.step === 2 && setBack.offset === 'p') || ([1, 3].includes(setBack.step) && setBack.offset === 'n') ?
    -this.yPadding : this.yPadding
  )
    this.curr.step = setBack.step

    let prevBubble: Bubble | undefined
    for (const bubble of this.list) {
      prevBubble = this.nextBubble(prevBubble ? prevBubble.x : setBack.x, bubble)
    }

    this.startAnimation()
  }

  init () {
    this.curr.y = this.midY + this.yPadding

    while (!this.list.length || this.list[this.list.length - 1].x < this.el.clientWidth) {
      this.list.push(this.nextBubble(this.last ? this.last.x : undefined))
    }

    for (const r of this.list) {
      this.el.firstChild.appendChild(r.elContainer)
    }
    this.state = 'running'
    this.nextFrame()
  }

  nextFrame () {
    if (this.state !== 'running') {
      this.state = 'stopped'
      return
    }
    // Call each individual bubble's update method
    for (const r of this.list) {
      r.noiseSeedX += this.noiseSpeed
      r.noiseSeedY += this.noiseSpeed
      const noise = new (Noise as any).Noise()
      const randomX = noise.simplex2(r.noiseSeedX, 0)
      const randomY = noise.simplex2(r.noiseSeedY, 0)

      r.x -= this.scrollSpeed
      r.xWithNoise = r.x + (randomX * this.noiseAmount)
      r.yWithNoise = r.y + (randomY * this.noiseAmount)
      r.imageClipX = this.midX - r.xWithNoise

      r.transform()
    }

    this.checkIfNextRequired()
    this.checkFirstOutOfBounds()

    // Queue up another nextFrame() method call on the next frame
    requestAnimationFrame(this.nextFrame.bind(this))
  }

  private checkFirstOutOfBounds () {
    const first = this.list[0]
    if (first.x < -first.size - 20) {
      this.list.splice(0, 1)
      this.el.firstChild.removeChild(first.elContainer)
    }
  }

  private checkIfNextRequired () {
    const last = this.last

    if (last && (last.x + (last.size / 2) + 20 <= this.el.clientWidth + last.size)) {
      const bubble = this.nextBubble(this.last.x)
      this.list.push(bubble)
      this.el.firstChild.appendChild(bubble.elContainer)
    }
  }

  async updateAll () {
    this.updateSize()
    this.updatePadding()
    // Recalculate bubbles
    await this.resize()
  }

  private nextY () {
    if (this.curr.step === 1 || this.curr.step === 3) return this.curr.y > this.midY ? this.curr.y : this.curr.y - this.size
    else return this.curr.y > this.midY ? this.curr.y - this.size : this.curr.y
  }

  private nextBubble (prevX?: number, target?: Bubble | null): Bubble | undefined {
    this.curr.step++
    if (this.curr.step > 3) {
      this.curr.step = 1
      this.curr.y = this.midY + (this.curr.y > this.midY ? -this.yPadding : +this.xPadding)
    }

    if (target === null) return undefined

    let bubble = { x: undefined, y: undefined }
    bubble = {
      x: (prevX ? prevX + (this.size / 2) : 0) + this.xPadding,
      y: this.nextY()
    }

    if (target) {
      target.redraw(
        bubble.x,
        bubble.y,
        this.size
      )
      return target
    }

    return new Bubble(
      this.list.length,
      this.curr.step,
      this.curr.y > this.midY ? 'p' : 'n',
      bubble.x,
      bubble.y,
      this.size,
      this.scaleGen.next().value,
      this.devSkillGen.next().value,
      this.opsSkillGen.next().value
    )
  }

  private *nextScale (): IterableIterator<number> {
    const scales = shuffle([0.85, 0.75, 0.65, 0.55]) // shuffle([1, 0.9, 0.8, 0.7, 0.6, 0.5])
    const usedScales = []

    while (true) {
      const [val] = scales.splice(0, 1)
      usedScales.push(val)
      if (scales.length <= 2) scales.push(...shuffle(usedScales.splice(0)))
      yield val
    }
  }

  private *nextDevelopmentSkill (): IterableIterator<IconMeta> {
    let i = -1

    while (true) {
      i++
      if (i === this.skills.development.length) i = 0
      yield {
        src: `assets/icons/skills/jpg/development/${this.skills.development[i].src}`,
        title: this.skills.development[i].title,
        sprite: this.skills.development[i].sprite
      }
    }
  }

  private *nextDevopsSkill (): IterableIterator<IconMeta> {
    let i = -1

    while (true) {
      i++
      if (i === this.skills.devops.length) i = 0
      yield {
        src: `assets/icons/skills/jpg/devops/${this.skills.devops[i].src}`,
        title: this.skills.devops[i].title,
        sprite: this.skills.devops[i].sprite
      }
    }
  }
}
