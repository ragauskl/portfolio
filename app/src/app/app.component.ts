import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'
import { Subscription, fromEvent } from 'rxjs'
import { auditTime } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private _subscriptions = new Subscription()
  @ViewChild('outlet', { static: true }) outlet: ElementRef
  get showMenu () {
    return !window.location.href.endsWith('browser-not-supported') &&
      !window.location.href.includes('error')
  }

  miniHeader = false

  constructor (
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    this.RegisterCustomIcons([
      ['send', 'icons/action/send.svg'],
      ['menu', 'icons/action/menu.svg']
    ])

    this._subscriptions.add(
      fromEvent(window, 'scroll')
      .pipe(
        auditTime(100)
      ).subscribe(() => this.miniHeader = document.scrollingElement.scrollTop > 1)
    )
  }

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
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
