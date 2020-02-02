import browser from 'bowser'

enum Browser {
  Chrome = 'Chrome',
  Edge = 'Edge',
  Opera = 'Opera',
  Firefox = 'Firefox',
  Safari = 'Safari',
  IE = 'IE'
}

class BrowserUtil {
  private logos = 'assets/icons/browsers'
  browsers = [{
    name: 'Firefox',
    supported: true,
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

  browserName: Browser = this.formatName(
    browser.getParser(window.navigator.userAgent).getBrowserName()
  )

  supported = !!this.browsers.find(x => x.name === this.browserName && x.supported)

  private formatName (name: string) {
    name = name.toLowerCase()
    if (name.includes('chrome')) {
      return Browser.Chrome
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

  isSafari () {
    return this.browserName === Browser.Safari
  }
}

export default new BrowserUtil()
