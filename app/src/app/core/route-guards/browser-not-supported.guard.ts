import { Injectable } from '@angular/core'
import { CanLoad, Route, Router, CanActivate } from '@angular/router'
import { BrowserService } from '@core/services/browser.service'

@Injectable({
  providedIn: 'root'
})
export class BrowserNotSupportedGuard implements CanActivate {
  constructor (
    private browserService: BrowserService,
    private router: Router
  ) {}

  canActivate (): boolean {
    if (this.browserService.supported) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
