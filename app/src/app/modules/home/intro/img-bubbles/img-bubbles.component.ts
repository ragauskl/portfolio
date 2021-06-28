import { Component, ElementRef, AfterViewInit } from '@angular/core'
import { ResizedEvent } from 'angular-resize-event'
import { Bubbles } from './utils/bubbles'
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'
import { Content } from '@core/utils/content'

@Component({
  selector: 'app-img-bubbles',
  templateUrl: './img-bubbles.component.html',
  styleUrls: ['./img-bubbles.component.scss']
})
export class ImgBubblesComponent implements AfterViewInit {
  bubbles: Bubbles
  resizeEvent = new Subject<void>()

  constructor (
    private _el: ElementRef<HTMLElement>
  ) {
    let resizeInProgress = false
    this.resizeEvent
    .pipe(debounceTime(100))
    .subscribe(async () => {
      if (resizeInProgress) return
      resizeInProgress = true
      this.bubbles && await this.bubbles.updateAll()
      resizeInProgress = false
    })
  }

  async toggleAnimation (animate: boolean) {
    if (!this.bubbles) return
    if (!animate) await this.bubbles.stopAnimation()
    else this.bubbles.startAnimation()
  }

  ngAfterViewInit () {
    this.bubbles = new Bubbles(this._el.nativeElement, Content.ToolSet)
  }

  onResized (e: ResizedEvent) {
    if (Math.abs(e.newHeight - e.oldHeight) > 0 && this.bubbles) {
      this.resizeEvent.next()
    }
  }
}
