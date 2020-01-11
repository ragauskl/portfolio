import { Directive, OnDestroy, Input } from '@angular/core'

@Directive({ selector: '[no-scroll]' })
export class NoScrollDirective implements OnDestroy {
  private _lastState: string

  @Input('no-scroll')
  set noScroll (val: boolean) {
    this.toggleScroll(val)
  }

  constructor () {
    this._lastState = document.body.style.overflowY
  }

  toggleScroll (disable: boolean) {
    if (disable && document.body.style.overflowY !== 'hidden') {
      this._lastState = document.body.style.overflowY
      document.body.style.overflowY = 'hidden'
    } else if (!disable && document.body.style.overflowY === 'hidden') {
      document.body.style.overflowY = this._lastState
    }
  }

  ngOnDestroy () {
    this.toggleScroll(false)
  }
}
