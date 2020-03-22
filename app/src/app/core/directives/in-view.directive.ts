import { Directive, Output, EventEmitter, ElementRef, AfterViewInit, OnDestroy } from '@angular/core'
import { fromEvent, Subscription } from 'rxjs'
import { auditTime } from 'rxjs/operators'

@Directive({ selector: '[in-view]' })
export class InViewDirective implements AfterViewInit, OnDestroy {
  private _subscriptions = new Subscription()
  @Output('in-view')
    public inView: EventEmitter<InViewDirective> = new EventEmitter()

  private _inView = false
  constructor (
    private _el: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit () {
    this.CheckInView()

    this._subscriptions.add(
      fromEvent(window, 'scroll')
      .pipe(
        auditTime(100)
      ).subscribe(e => {
        this.CheckInView()
      })
    )
  }

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
  }

  private CheckInView () {
    const rect = this._el.nativeElement.getBoundingClientRect()
    const inRange = (vals: number[], min: number, max: number) => vals.some(val => val >= min && val <= max)

    const inView = inRange([rect.top, rect.bottom], 0, window.innerHeight) &&
      inRange([rect.left, rect.right], 0, window.innerWidth)

    if (inView && !this._inView) this.inView.next()
    this._inView = inView
  }
}
