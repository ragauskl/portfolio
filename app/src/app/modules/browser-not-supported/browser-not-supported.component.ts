import { Component } from '@angular/core'
import browserUtil from '@core/utils/browser.util'

@Component({
  selector: 'app-browser-not-supported',
  templateUrl: './browser-not-supported.component.html',
  styleUrls: ['./browser-not-supported.component.scss']
})
export class BrowserNotSupportedComponent {
  get browsers () {
    return browserUtil.browsers
  }

  get current () {
    return browserUtil.browserName
  }
}
