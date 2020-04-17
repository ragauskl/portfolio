import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProjectsComponent } from './projects.component'
import { CoreModule } from '@core/core.module'
import { ProjectsRoutingModule } from './projects.routing'
import { ProjectComponent } from './project/project.component'
import { MarkdownModule } from 'ngx-markdown'
@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ProjectsRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class ProjectsModule { }
