import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core'
import { Subscription, interval } from 'rxjs'

@Component({
  selector: 'app-arrow-scroll',
  templateUrl: './arrow-scroll.component.html',
  styleUrls: ['./arrow-scroll.component.scss']
})
export class ArrowScrollComponent {
  @Input() contentContainerId?: string
  @Input() contentId?: string
  @ViewChild('scroll', { static: true }) scrollRef!: ElementRef<HTMLElement>

  private scrollSubscription?: Subscription
  private _scrollBy = 0

  scrollDirection (direction: 1 | 0 | -1) {
    if (this.scrollSubscription) this.scrollSubscription.unsubscribe()
    this._scrollBy = direction

    if (direction) {
      this.scrollSubscription = interval(1).subscribe(() => {
        this.scrollRef.nativeElement.scrollTop += this._scrollBy
        if (this._scrollBy < 0 && this.scrollRef.nativeElement.scrollTop <= 0) {
          this.scrollDirection(0)
        } else if (this._scrollBy > 0 && this.scrollRef.nativeElement.scrollTop >= this.scrollRef.nativeElement.scrollHeight - this.scrollRef.nativeElement.clientHeight) {
          this.scrollDirection(0)
        }
      })
    }
  }

  scrollSpeed (by: number) {
    this._scrollBy += by
  }

  scrollBy (by: number) {
    this.scrollRef.nativeElement.scrollTop += by
  }
}
