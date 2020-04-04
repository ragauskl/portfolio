import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Project } from '@core/model/interfaces/project'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = []
  featuredProjects: Project[] = []

  get hasProjectsPage () {
    return this.projects > this.featuredProjects
  }

  constructor (
    private _http: HttpClient,
    private _router: Router
  ) {
    this._http.get('assets/projects/projects.json').subscribe((json: Project[]) => {
      this.projects = json.filter(x => !x.hidden)
      this.featuredProjects = this.projects.filter(x => x.featured)
    })
  }

  viewProject (project: Project) {
    console.log('project:', project)
    this._router.navigate(['projects', project.tag])
  }
}
