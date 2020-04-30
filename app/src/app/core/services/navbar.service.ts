import { Injectable } from '@angular/core'
import { Section } from '@core/model/section'
import { Router, NavigationEnd } from '@angular/router'
import { fromEvent, Subject } from 'rxjs'
import { auditTime } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  currentTitle = 'Home'
  currentRoute = '/'

  activeSection?: keyof typeof Section

  headerHeight = 150
  headerResizable = true

  constructor (
    private _router: Router
  ) {
    this._router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url
        this.UpdateActiveSection()
      }
    })

    fromEvent(window, 'scroll').subscribe(e =>
      this.headerResizable && this.CalculateHeader()
    )

    this._router.events
    .subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.headerResizable = e.url === '/'
        this.CalculateHeader()
      }
    })

    fromEvent(window, 'scroll')
    .pipe(auditTime(500))
    .subscribe(() => this.UpdateActiveSection())
  }

  private CalculateHeader () {
    this._targetHeight = this.headerResizable ?
    Math.max(50, 150 - document.scrollingElement.scrollTop * 0.5 * Math.max(1, Math.round(window.devicePixelRatio) - 1)) :
    50

    this.AnimateHeader()
  }

  private _targetHeight = 150
  private AnimateHeader () {
    if (this.headerHeight === this._targetHeight) return
    const by = Math.max(1, Math.abs(this.headerHeight - this._targetHeight) * 0.05)

    if (Math.abs(this.headerHeight - this._targetHeight) <= by) {
      this.headerHeight = this._targetHeight
      return
    }

    this.headerHeight += this._targetHeight > this.headerHeight ? by : -by

    requestAnimationFrame(this.AnimateHeader.bind(this))
  }

  private UpdateActiveSection () {
    for (const key of Object.keys(Section) as (keyof typeof Section)[]) {
      const section = Section[key]
      if (this.currentRoute !== '/') {
        if (section.startsWith('/') && this.currentRoute === section) {
          this.activeSection = key
          return
        }
        continue
      }

      const el = document.getElementById(section)
      if (!el) continue
      const rect = el.getBoundingClientRect()

      const rangeOverlap = (r1Min: number, r1Max: number, r2Min: number, r2Max: number) => r1Min <= r2Max && r1Max >= r2Min

      const inViewCheckpoint = Math.round(window.innerHeight * 0.49)

      const inView = rangeOverlap(rect.top, rect.bottom, inViewCheckpoint, inViewCheckpoint + 1) &&
      rangeOverlap(rect.left, rect.right, 0, window.innerWidth)

      if (inView) {
        this.activeSection = key
        return
      }
    }

    if (this.currentRoute === '/' && !this.activeSection) this.activeSection = 'intro'

  }

  goTo (section: string | null) {
    if (!section) {
      document.scrollingElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }

    if (section.startsWith('/')) {
      const sub = this._router.events.subscribe(e => {
        if (e instanceof NavigationEnd && e.url === section) {
          sub.unsubscribe()
          document.scrollingElement.scrollTop = 0
        }
      })
      this._router.navigate([section])
      return
    }

    this.ScrollToHomeSection(section, 0)
  }

  private ScrollToHomeSection (section: string, attempts = 0) {
    if (this.currentRoute !== '/') {
      const sub = this._router.events.subscribe(e => {
        if (e instanceof NavigationEnd && e.url === '/') {
          sub.unsubscribe()
          document.scrollingElement.scrollTop = 0
          setTimeout(() => this.ScrollToHomeSection(section), 100)
        }
      })
      this._router.navigate(['/'])
      return
    }

    if (section === Section.intro) {
      document.scrollingElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }

    const el = document.getElementById(section)
    if (section && !el) {
      if (attempts > 5) return
      attempts++

      setTimeout(() => this.ScrollToHomeSection(section, attempts), 100)
      return
    }

    const { top } = this.relativeBoundingClientRect(el, document.scrollingElement)
    const target = this.AdjustByHeader(top)
    document.scrollingElement.scrollTo({
      top: target,
      behavior: 'smooth'
    })
  }

  private AdjustByHeader (value: number) {
    const header = (this.headerHeight - 50) || 50
    return value - header - Math.max(0, 50 - document.scrollingElement.scrollTop)
  }

  relativeBoundingClientRect (child: HTMLElement, parent: Element) {
    const parentPos = parent.getBoundingClientRect()
    const childPos = child.getBoundingClientRect()
    const relativePos: any = {}

    relativePos.top = childPos.top - parentPos.top,
    relativePos.right = childPos.right - parentPos.right,
    relativePos.bottom = childPos.bottom - parentPos.bottom,
    relativePos.left = childPos.left - parentPos.left

    const padding = (window.innerHeight - 50 - childPos.height) / 2
    if (padding > 0) {
      relativePos.top -= padding
      relativePos.bottom += padding
    }

    return relativePos
  }
}
