import browser from 'bowser'

enum Browser {
  Chrome = 'Chrome',
  Brave = 'Brave',
  Edge = 'Edge',
  EdgeC = 'Edge (Chromium)',
  Opera = 'Opera',
  Firefox = 'Firefox',
  Safari = 'Safari',
  IE = 'IE'
}

class BrowserUtil {
  private logos = 'assets/icons/browsers'
  browsers = [{
    name: Browser.Firefox,
    // Performance issues
    supported: true,
    src: `${this.logos}/firefox.svg`,
    href: 'https://www.mozilla.org/en-GB/firefox/new/'
  }, {
    name: Browser.Chrome,
    supported: true,
    src: `${this.logos}/chrome.svg`,
    href: 'https://www.google.com/chrome/'
  }, {
    name: Browser.Brave,
    supported: true,
    src: `${this.logos}/brave.svg`,
    href: 'https://brave.com/xsc238'
  }, {
    name: Browser.Safari,
    supported: true,
    src: `${this.logos}/safari.svg`,
    href: 'https://www.apple.com/uk/safari/'
  }, {
    name: Browser.Edge,
    supported: false,
    src: `${this.logos}/edge.svg`
  }, {
    name: Browser.EdgeC,
    supported: true,
    src: `${this.logos}/edge-chromium.svg`,
    href: 'https://www.microsoft.com/en-us/edge'
  }, {
    name: Browser.Opera,
    supported: true,
    src: `${this.logos}/opera.svg`,
    href: 'https://www.opera.com/'
  }, {
    name: Browser.IE,
    supported: false,
    src: `${this.logos}/ie.svg`
  }]

  browserName: Browser = this.formatName(
    browser.getParser(window.navigator.userAgent).getBrowserName()
  )

  supported = !!this.browsers.find(x => x.name === this.browserName && x.supported)

  touchDevice = this.isTouchDevice()
  isTouchDevice () {
    try {
      document.createEvent('TouchEvent')
      return true
    } catch (e) {
      return false
    }
  }

  private formatName (name: string) {
    name = name.toLowerCase()
    if (name.includes('chrome')) {
      return Browser.Chrome
    } else if (window.navigator.userAgent.toLowerCase().includes('edg/')) {
      return Browser.EdgeC
    } else if (name.includes('edge')) {
      return Browser.Edge
    } else if (name.includes('opera')) {
      return Browser.Opera
    } else if (name.includes('firefox')) {
      return Browser.Firefox
    } else if (name.includes('safari')) {
      return Browser.Safari
    } else if (name.includes('explorer')) {
      return Browser.IE
    }
  }

  get isSafari () {
    return this.browserName === Browser.Safari
  }

  get isFirefox () {
    return this.browserName === Browser.Firefox
  }

  get disableAnimations () {
    return this.isFirefox
  }
}

export default new BrowserUtil()
