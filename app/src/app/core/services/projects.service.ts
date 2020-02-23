import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Project } from '@core/model/interfaces/project'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = []
  featuredProjects: Project[] = []
  constructor (
    private _http: HttpClient
  ) {
    this._http.get('assets/projects/projects.json').subscribe((json: Project[]) => {
      this.projects = json
      this.featuredProjects = json.filter(x => x.featured)
    })
  }
}
