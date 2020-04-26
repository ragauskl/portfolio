import { Component, OnDestroy } from '@angular/core'
import { ViewService } from '@core/services/view.service'
import { Subscription } from 'rxjs'
import { Content, SkillSet, SkillMetadata } from '@core/utils/content'

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnDestroy {
  private _subscriptions = new Subscription()

  skillSets: (SkillSet & {
    tools: SkillMetadata[]
  })[]

  constructor (
    public viewService: ViewService
  ) {
    this.skillSets = Content.SkillSets.map(x => ({
      ...x,
      tools: Content.ToolSet.filter(y => y.set === x.type)
    }))
  }

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
  }
}
