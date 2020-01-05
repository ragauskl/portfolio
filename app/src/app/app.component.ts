import { Component, ViewChild, ElementRef } from '@angular/core'
import { environment } from 'environments/environment'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

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

  get headerHeight () {
    return Math.max(56, 128 - this.scrollOffset * 0.3)
  }
  get scrollOffset () {
    return document.scrollingElement.scrollTop
  }

  constructor (
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    if (environment.production) {
      // TODO: Inject google analytics
    }

    this.RegisterCustomIcons([
      ['send', 'icons/action/send.svg']
    ])
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
