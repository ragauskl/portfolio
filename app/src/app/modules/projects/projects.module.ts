import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProjectsComponent } from './projects.component'
import { CoreModule } from '@core/core.module'
import { ProjectsRoutingModule } from './projects.routing'
import { MarkdownModule } from 'ngx-markdown'
import { ArticleComponent } from 'app/modules/projects/article/article.component'

@NgModule({
  declarations: [
    ProjectsComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ProjectsRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class ProjectsModule { }
