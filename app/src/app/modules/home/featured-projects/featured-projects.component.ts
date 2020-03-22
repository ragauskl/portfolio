import { Component } from '@angular/core'
import { ProjectsService } from '@core/services/projects.service'
import { ViewService } from '@core/services/view.service'

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent {
  constructor (
    public viewService: ViewService,
    public projectsService: ProjectsService
  ) { }

}
