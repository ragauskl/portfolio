import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core'
import { Subscription, interval, fromEvent } from 'rxjs'

@Component({
  selector: 'app-arrow-scroll[contentContainerId]',
  templateUrl: './arrow-scroll.component.html',
  styleUrls: ['./arrow-scroll.component.scss']
})
export class ArrowScrollComponent {
  @Input() contentContainerId?: string
  @Input() contentId?: string
  @ViewChild('scroll', { static: true }) scrollRef!: ElementRef<HTMLElement>

  private scrollSubscription?: Subscription
  scrollBy = 0

  scrollDirection (direction: 1 | 0 | -1 | number) {
    if (this.scrollSubscription) this.scrollSubscription.unsubscribe()
    this.scrollBy = direction

    if (direction) {
      this.scrollSubscription = interval(1).subscribe(() => {
        this.scrollRef.nativeElement.scrollTop += this.scrollBy
        if (this.scrollBy < 0 && this.scrollRef.nativeElement.scrollTop <= 0) {
          this.scrollDirection(0)
        } else if (this.scrollBy > 0 && this.scrollRef.nativeElement.scrollTop >= this.scrollRef.nativeElement.scrollHeight - this.scrollRef.nativeElement.clientHeight) {
          this.scrollDirection(0)
        }
      })
    }
  }

  scrollSpeed (by: number) {
    if (!this.scrollBy) this.scrollDirection(by as any)
    else this.scrollBy += by
  }
}
