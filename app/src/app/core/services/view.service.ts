import { Injectable } from '@angular/core'
import { fromEvent, Subject, BehaviorSubject } from 'rxjs'
import { auditTime } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ViewService {
  get mobile () {
    return this._viewMode === 'mobile'
  }

  get tablet () {
    return this._viewMode === 'tablet'
  }

  private _viewMode: 'desktop' | 'mobile' | 'tablet'
  private _viewModeChange: BehaviorSubject<'desktop' | 'mobile' | 'tablet'>
  get viewModeChange () {
    return this._viewModeChange.asObservable()
  }

  constructor () {
    this.calculateType(false)
    this._viewModeChange = new BehaviorSubject(this._viewMode)
    fromEvent(window, 'resize')
    .pipe(
      auditTime(100)
    ).subscribe(() => this.calculateType())
  }

  calculateType (emit: boolean = true) {
    this._viewMode = window.innerWidth < 960 ? 'mobile' :
      window.innerWidth < 1280 ? 'tablet' : 'desktop'

    if (emit) this._viewModeChange.next(this._viewMode)
  }
}
