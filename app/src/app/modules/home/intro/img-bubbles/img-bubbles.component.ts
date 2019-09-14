import { Component, ElementRef, HostListener, AfterViewInit } from '@angular/core'
import { SkillsConfig } from './utils/bubble-utils'
import { HttpClient } from '@angular/common/http'
import { ResizedEvent } from 'angular-resize-event'
import { Bubbles } from './utils/bubbles'

@Component({
  selector: 'app-img-bubbles',
  templateUrl: './img-bubbles.component.html',
  styleUrls: ['./img-bubbles.component.scss']
})
export class ImgBubblesComponent implements AfterViewInit {
  @HostListener('window:keyup', ['$event'])
  onKeyUp (e: KeyboardEvent) {
    if (e.code === 'Space') {
      this.bubbles.stop = !this.bubbles.stop
    }
  }

  bubbles: Bubbles

  constructor (
    private _http: HttpClient,
    private _el: ElementRef<HTMLElement>
  ) { }

  ngAfterViewInit () {
    this._http.get('assets/skills.json').subscribe((json: SkillsConfig) => {
      this.bubbles = new Bubbles(this._el.nativeElement, json)
    })
  }

  onResized (e: ResizedEvent) {
    if (Math.abs(e.newHeight - e.oldHeight) > 0 && this.bubbles) {
      this.bubbles.updateAll()
    }
  }
}
