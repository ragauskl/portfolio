import { Injectable } from '@angular/core'
import { fromEvent, BehaviorSubject } from 'rxjs'
import { auditTime } from 'rxjs/operators'
import WebGLStats from '@core/utils/webgl-stats'
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

  readonly reducedPerformance = WebGLStats.majorPerformanceCaveat

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
