import { Component, ViewChild, ElementRef, OnInit } from '@angular/core'
import { ThemeService } from '@core/services/theme.service'
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

  get scrollOffset () {
    return document.scrollingElement.scrollTop
  }

  constructor (
    private themeService: ThemeService,
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

  minTop (val: number) {
    return Math.max(56, val)
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
