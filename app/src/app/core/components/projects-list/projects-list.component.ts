import { Component, OnInit, Input } from '@angular/core'
import { Project } from '@core/model/interfaces/project'
import { ViewService } from '@core/services/view.service'

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() projects: Project[]

  constructor (
    public viewService: ViewService
  ) { }

}
