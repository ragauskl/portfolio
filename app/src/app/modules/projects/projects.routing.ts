import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ProjectsComponent } from './projects.component'
import { ArticleComponent } from './article/article.component'

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: ':project-tag', component: ArticleComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
