import { Component, ViewChild } from '@angular/core'
import { ProjectsService } from '@core/services/projects.service'
import { Project } from '@core/model/interfaces/project'
import { ActivatedRoute } from '@angular/router'
import { MarkdownComponent } from 'ngx-markdown'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  project: Project
  @ViewChild('description', { static: false }) description!: MarkdownComponent
  constructor (
    public projectsService: ProjectsService,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(p => {
      this.project = projectsService.projects.find(x => x.tag === p['project-tag'])
    })
  }

  onLoad () {
    const links = Array.from(this.description.element.nativeElement.getElementsByTagName('a'))
    for (const link of links) {
      const url = new URL(link.href)
      if (url.host === window.location.host) {
        link.href = `${window.location.origin}${window.location.pathname}${url.hash}`
      }
    }
  }
}
