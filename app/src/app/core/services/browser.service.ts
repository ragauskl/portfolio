import { Injectable } from '@angular/core'
import browser from 'bowser'

@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  private logos = 'assets/icons/browsers'
  browsers = [{
    name: 'Firefox',
    supported: false,
    src: `${this.logos}/firefox.svg`,
    href: 'https://www.mozilla.org/en-GB/firefox/new/'
  }, {
    name: 'Chrome',
    supported: true,
    src: `${this.logos}/chrome.svg`,
    href: 'https://www.google.com/chrome/'
  }, {
    name: 'Brave',
    supported: true,
    src: `${this.logos}/brave.svg`,
    href: 'https://brave.com/xsc238'
  }, {
    name: 'Safari',
    supported: true,
    src: `${this.logos}/safari.svg`,
    href: 'https://www.apple.com/uk/safari/'
  }, {
    name: 'Edge',
    supported: false,
    src: `${this.logos}/edge.svg`
  }, {
    name: 'Opera',
    supported: true,
    src: `${this.logos}/opera.svg`,
    href: 'https://www.opera.com/'
  }, {
    name: 'IE',
    supported: false,
    src: `${this.logos}/ie.svg`
  }]

  browserName = this.formatName(
    browser.getParser(window.navigator.userAgent).getBrowserName()
  )
  supported = !!this.browsers.find(x => x.name === this.browserName && x.supported)

  private formatName (name: string) {
    name = name.toLowerCase()
    if (name.includes('chrome')) {
      return 'Chrome'
    } else if (name.includes('edge')) {
      return 'Edge'
    } else if (name.includes('opera')) {
      return 'Opera'
    } else if (name.includes('firefox')) {
      return 'Firefox'
    } else if (name.includes('safari')) {
      return 'Safari'
    } else if (name.includes('explorer')) {
      return 'IE'
    }
  }
}
