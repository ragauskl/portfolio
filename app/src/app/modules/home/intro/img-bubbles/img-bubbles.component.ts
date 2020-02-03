import { Component, ElementRef, HostListener, AfterViewInit } from '@angular/core'
import { SkillsConfig } from './utils/bubble-utils'
import { HttpClient } from '@angular/common/http'
import { ResizedEvent } from 'angular-resize-event'
import { Bubbles } from './utils/bubbles'
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-img-bubbles',
  templateUrl: './img-bubbles.component.html',
  styleUrls: ['./img-bubbles.component.scss']
})
export class ImgBubblesComponent implements AfterViewInit {
  @HostListener('window:keyup', ['$event'])
  onKeyUp (e: KeyboardEvent) {
    // if (e.code === 'Space') {
    //   if (this.bubbles.state === 'running') this.bubbles.stopAnimation()
    //   else if (this.bubbles.state === 'stopped') this.bubbles.startAnimation()
    // }
  }

  bubbles: Bubbles
  resizeEvent = new Subject()
  constructor (
    private _http: HttpClient,
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
    if (!animate) await this.bubbles.stopAnimation()
    else this.bubbles.startAnimation()
  }

  ngAfterViewInit () {
    this._http.get('assets/skills.json').subscribe((json: SkillsConfig) => {
      this.bubbles = new Bubbles(this._el.nativeElement, json)
    })
  }

  onResized (e: ResizedEvent) {
    if (Math.abs(e.newHeight - e.oldHeight) > 0 && this.bubbles) {
      this.resizeEvent.next()
    }
  }
}
