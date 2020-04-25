import { Component, ViewChild, OnDestroy } from '@angular/core'
import { ViewService } from '@core/services/view.service'
import { Subscription } from 'rxjs'
import { MatTabGroup } from '@angular/material/tabs'

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnDestroy {
  private _subscriptions = new Subscription()
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' }
  @ViewChild('matTabGroup', { static: false }) matTabGroup?: MatTabGroup

  constructor (
    public viewService: ViewService
  ) {
    this._subscriptions.add(
      viewService.viewModeChange.subscribe(() => '...')
    )
    window['skills'] = this
  }

  onTabChange () {
    // ...
  }

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
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
