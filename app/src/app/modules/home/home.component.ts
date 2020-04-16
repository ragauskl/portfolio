import { Component } from '@angular/core'
import { NavBarService } from '@core/services/navbar.service'
import { Section } from '@core/model/section'
import { ProjectsService } from '@core/services/projects.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  section = Section

  constructor (
    public navBar: NavBarService,
    public projectsService: ProjectsService
  ) {}
}
