import { Injectable } from '@angular/core'
import { Section } from '@core/model/section'
import { Router, NavigationEnd } from '@angular/router'
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  currentTitle = 'Home'
  currentRoute = '/'

  constructor (private _router: Router) {
    this._router.events.subscribe(e => {
      if (e instanceof NavigationEnd) this.currentRoute = e.url
    })
  }

  scrollTo (section: keyof typeof Section | null, attempts = 0) {
    if (this.currentRoute !== '/') {
      const sub = this._router.events.subscribe(e => {
        if (e instanceof NavigationEnd && e.url === '/') {
          sub.unsubscribe()
          setTimeout(() => this.scrollTo(section), 100)
        }
      })
      this._router.navigate(['/'])
      return
    }

    const el = document.getElementById(section)
    if (section && !el) {
      if (attempts > 5) return
      attempts++

      setTimeout(() => this.scrollTo(section, attempts), 100)
      return
    }

    if (!section) {
      document.scrollingElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
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
    return value - 50 - Math.max(0, 50 - document.scrollingElement.scrollTop)
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
