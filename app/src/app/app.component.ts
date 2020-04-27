import { Component, ViewChild, ElementRef } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'
import { NavBarService } from '@core/services/navbar.service'

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

  constructor (
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    public navBar: NavBarService
  ) {
    this.RegisterCustomIcons([
      ['send', 'icons/action/send.svg'],
      ['menu', 'icons/action/menu.svg']
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
