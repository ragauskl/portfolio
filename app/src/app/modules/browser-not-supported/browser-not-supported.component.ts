import { Component } from '@angular/core'
import { BrowserService } from '@core/services/browser.service'

@Component({
  selector: 'app-browser-not-supported',
  templateUrl: './browser-not-supported.component.html',
  styleUrls: ['./browser-not-supported.component.scss']
})
export class BrowserNotSupportedComponent {
  get browsers () {
    return this.browserService.browsers
  }

  get current () {
    return this.browserService.browserName
  }

  constructor (
    private browserService: BrowserService
  ) {}
}
