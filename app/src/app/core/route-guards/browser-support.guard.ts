import { Injectable } from '@angular/core'
import { CanLoad, Route, Router, CanActivate } from '@angular/router'
import browserUtil from '@core/utils/browser.util'

@Injectable({
  providedIn: 'root'
})
export class BrowserSupportGuard implements CanActivate {
  constructor (
    private router: Router
  ) {}

  canActivate (): boolean {
    if (!browserUtil.supported) {
      this.router.navigateByUrl('browser-not-supported')
      return false
    }
    return true
  }
}
