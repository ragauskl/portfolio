import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Content, Article } from '@core/utils/content'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Article[] = []
  featuredProjects: Article[] = []

  get hasProjectsPage () {
    return this.projects > this.featuredProjects
  }

  constructor (
    private _router: Router
  ) {
    this.projects = Content.Articles.filter(x => x.type === 'project' && !x.hidden)
    this.featuredProjects = this.projects.filter(x => x.featured)
  }

  viewProject (project: Article) {
    this._router.navigate(['projects', project.article])
  }
}
