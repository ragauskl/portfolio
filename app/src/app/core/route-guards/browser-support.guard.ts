import { Injectable } from '@angular/core'
import { CanLoad, Route, Router, CanActivate } from '@angular/router'
import { BrowserService } from '@core/services/browser.service'

@Injectable({
  providedIn: 'root'
})
export class BrowserSupportGuard implements CanActivate {
  constructor (
    private browserService: BrowserService,
    private router: Router
  ) {}

  canActivate (): boolean {
    if (!this.browserService.supported) {
      this.router.navigateByUrl('browser-not-supported')
      return false
    }
    return true
  }
}
