import { Component } from '@angular/core'
import { ViewService } from '@core/services/view.service'
import { ProjectsService } from '@core/services/projects.service'
import { NavBarService } from '@core/services/navbar.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor (
    public viewService: ViewService,
    public projectsService: ProjectsService,
    public navBar: NavBarService
  ) {
    document.scrollingElement.scrollTop = 0
  }

}
