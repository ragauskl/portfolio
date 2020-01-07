import { Injectable } from '@angular/core'
import { Section } from '@core/model/section'

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  currentTitle = 'Home'

  scrollTo (section: keyof typeof Section | null) {
    const el = document.getElementById(section)
    const { top } = section ? this.relativeBoundingClientRect(el, document.scrollingElement) :
      { top: 128 }

    const target = top - 128 + (top < document.scrollingElement.scrollTop + document.scrollingElement.clientHeight ? 55 : 0)

    document.scrollingElement.scrollTo({
      top: target,
      behavior: 'smooth'
    })
  }

  relativeBoundingClientRect (child: HTMLElement, parent: Element) {
    const parentPos = parent.getBoundingClientRect()
    const childPos = child.getBoundingClientRect()

    const relativePos: any = {}

    relativePos.top = childPos.top - parentPos.top,
    relativePos.right = childPos.right - parentPos.right,
    relativePos.bottom = childPos.bottom - parentPos.bottom,
    relativePos.left = childPos.left - parentPos.left
    return relativePos
  }
}
