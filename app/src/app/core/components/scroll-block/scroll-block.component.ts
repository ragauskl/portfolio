import { Component, Input, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { Subscription, fromEvent } from 'rxjs'

@Component({
  selector: 'app-scroll-block',
  templateUrl: './scroll-block.component.html',
  styleUrls: ['./scroll-block.component.scss']
})
export class ScrollBlockComponent implements OnDestroy, AfterViewInit {
  private _subscriptions = new Subscription()
  @Input() contentClass?: string
  @ViewChild('scroll') scrollElement!: ElementRef<HTMLElement>

  canScrollUp = true
  canScrollDown = true

  ngAfterViewInit () {
    this._subscriptions.add(
      fromEvent(this.scrollElement.nativeElement, 'scroll').subscribe(() =>
        this.recalculateScrollFlags()
      )
    )
  }

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
  }

  recalculateScrollFlags () {
    const scroll = this.scrollElement.nativeElement
    this.canScrollUp = !!scroll.scrollTop
    this.canScrollDown = (scroll.scrollTop + 2) < (scroll.scrollHeight - scroll.clientHeight)
  }
}
