import { Directive, Output, EventEmitter, ElementRef } from '@angular/core'

@Directive({
  selector: '[track-scroll]',
  host: { '(window:scroll)': 'track($event)' }
})
export class TrackScrollDirective {
  @Output('out-of-view')
    public outOfView: EventEmitter<void> = new EventEmitter<void>()

  @Output('in-view')
    public inView: EventEmitter<void> = new EventEmitter<void>()

  private _inViewport?: boolean

  constructor (private _el: ElementRef<HTMLElement>) {}

  track () {
    const { bottom, top } = this._el.nativeElement.getBoundingClientRect()

    if (
      (top >= 50 && top < (window.innerHeight - 50)) ||
      (bottom >= 50 && bottom < (window.innerHeight - 50))
    ) {
      if (this._inViewport === undefined) this._inViewport = true
      if (this._inViewport === true) return
      this._inViewport = true

      this.inView.next()
    } else {
      if (this._inViewport === undefined) this._inViewport = false
      if (this._inViewport === false) return
      this._inViewport = false

      this.outOfView.next()
    }
  }
}
