import { Injectable } from '@angular/core'
declare var opr
declare var InstallTrigger
declare var safari

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

  browserName = this.getBrowserName()
  supported = !!this.browsers.find(x => x.name === this.browserName)

  private getBrowserName () {
    const w: any = window
    const d: any = document
    let name: string

    if (navigator.userAgent.includes('Chrome') || navigator.userAgent.includes('Chromium')) {
      name = 'Chrome'
    } else if (
      (!!w.opr && !!opr.addons) || !!w.opera || navigator.userAgent.indexOf(' OPR/') >= 0
    ) {
      name = 'Opera'
    } else if (
      typeof InstallTrigger !== 'undefined'
    ) {
      name = 'Firefox'
    } else if (
      /constructor/i.test(w.HTMLElement) ||
      (function (p) { return p.toString() === '[object SafariRemoteNotification]' })(!window['safari'] ||
      (typeof safari !== 'undefined' && safari.pushNotification))
    ) {
      name = 'Safari'
    } else if (
      /*@cc_on!@*/false || d.documentMode
    ) {
      name = 'Edge'
    } else if (
      w.StyleMedia
    ) {
      name = 'IE'
    }

    return name
  }
}
