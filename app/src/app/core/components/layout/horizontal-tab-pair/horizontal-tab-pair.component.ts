import { Component, OnDestroy, ViewChild, Output, ElementRef, EventEmitter, Input } from '@angular/core'
import { ViewService } from '@core/services/view.service'
import { MatTabGroup } from '@angular/material/tabs'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-horizontal-tab-pair',
  templateUrl: './horizontal-tab-pair.component.html',
  styleUrls: ['./horizontal-tab-pair.component.scss']
})
export class HorizontalTabPairComponent implements OnDestroy {
  private _subscriptions = new Subscription()
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' }

  @ViewChild('matTabGroup', { static: false }) matTabGroup?: MatTabGroup
  @Output() tabChange = new EventEmitter<number>()

  showBack = false
  @Input() primarySize = `55%`
  @Input() secondarySize = `35%`

  @Input()
  get selectedIndex () {
    return this.matTabGroup ? this.matTabGroup.selectedIndex : 0
  }
  set selectedIndex (val: number) {
    if (this.matTabGroup) this.matTabGroup.selectedIndex = val
  }

  get compact () {
    return this.viewService.mobile
  }

  constructor (
    public viewService: ViewService,
    private _el: ElementRef<HTMLElement>
  ) {
    this._subscriptions.add(
      viewService.viewModeChange.subscribe(() => {
        this.UpdateHostAttributes()
        this.UpdateBackButton()
      })
    )

    this._subscriptions.add(
      this.tabChange.subscribe(() => this.UpdateBackButton())
    )

    if (!window['layoutIndex']) window['layoutIndex'] = 0
    window['layoutIndex']++

    window[`layout${window['layoutIndex'] }`] = this

    this.UpdateHostAttributes()
  }

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
  }

  private UpdateBackButton () {
    // In function due to 'Expression has changed...' error
    this.showBack = this.compact && this.matTabGroup && this.matTabGroup.selectedIndex !== 0
  }

  private UpdateHostAttributes () {
    this._el.nativeElement.classList.remove('compact')
    if (this.compact) {
      this._el.nativeElement.classList.add('compact')
    }
  }

  swipe (eType: string) {
    if (!this.matTabGroup) return
    if (eType === this.SWIPE_ACTION.RIGHT && this.matTabGroup.selectedIndex > 0) {
      this.matTabGroup.selectedIndex--
    } else if (eType === this.SWIPE_ACTION.LEFT && this.matTabGroup.selectedIndex < 1) {
      this.matTabGroup.selectedIndex++
    }
  }

  selectTab (i: 0 | 1) {
    if (this.matTabGroup) this.matTabGroup.selectedIndex = i
  }
}
