import { Injectable } from '@angular/core'
import { Section } from '@core/model/section'

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  currentTitle = 'Home'

  scrollTo (section: keyof typeof Section | null) {
    const el = document.getElementById(section)

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
