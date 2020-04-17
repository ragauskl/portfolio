import { Component, ViewChild, ElementRef } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'
import { fromEvent } from 'rxjs'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('outlet', { static: true }) outlet: ElementRef
  get showMenu () {
    return !window.location.href.endsWith('browser-not-supported') &&
      !window.location.href.includes('error')
  }

  headerHeight = 150
  headerResizable = true

  constructor (
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _router: Router
  ) {
    this.RegisterCustomIcons([
      ['send', 'icons/action/send.svg'],
      ['menu', 'icons/action/menu.svg']
    ])

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
  }

  private CalculateHeader () {
    this.headerHeight = this.headerResizable ?
      Math.max(50, 150 - document.scrollingElement.scrollTop * 0.5 * Math.max(1, Math.round(window.devicePixelRatio) - 1)) :
      50
  }

  private RegisterCustomIcons (icons: [string, string][]) {
    for (const icon of icons) {
      const [label, path] = icon
      this._matIconRegistry.addSvgIcon(
        label,
        this._domSanitizer.bypassSecurityTrustResourceUrl(
          `../assets/${path}`
        )
      )
    }
  }
}
