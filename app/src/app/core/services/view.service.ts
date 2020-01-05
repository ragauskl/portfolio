import { Injectable } from '@angular/core'
import { fromEvent } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private _mobile = false
  get mobile () {
    return this._mobile
  }

  private _tablet = false
  get tablet () {
    return this._tablet
  }

  constructor () {
    this.calculateType()
    fromEvent(window, 'resize').subscribe(() => this.calculateType())
  }

  calculateType () {
    this._mobile = window.innerWidth < 960
    this._tablet = window.innerWidth < 1280
  }
}
