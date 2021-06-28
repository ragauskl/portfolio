import { ChangeDetectorRef, Component, Input } from '@angular/core'
import { ViewService } from '@core/services/view.service'
import { ProjectsService } from '@core/services/projects.service'
import browserUtil from '@core/utils/browser.util'
import { Article } from '@core/utils/content'
// TODO: When there will be more projects, add directive to remove 3js canvases
// when they are out of view
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() projects: Article[]
  @Input() renderWhen: 'in-view' | 'rendered' = 'in-view'
  basicImage = browserUtil.disableAnimations || this.viewService.reducedPerformance || browserUtil.touchDevice

  constructor (
    public viewService: ViewService,
    public projectsService: ProjectsService,
    private _cd: ChangeDetectorRef
  ) {}

  detectChanges () {
    this._cd.detectChanges()
  }
}
