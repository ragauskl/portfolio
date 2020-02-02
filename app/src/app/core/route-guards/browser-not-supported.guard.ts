import { Injectable } from '@angular/core'
import { CanLoad, Route, Router, CanActivate } from '@angular/router'
import browserUtil from '@core/utils/browser.util'

@Injectable({
  providedIn: 'root'
})
export class BrowserNotSupportedGuard implements CanActivate {
  constructor (
    private router: Router
  ) {}

  canActivate (): boolean {
    if (browserUtil.supported) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
