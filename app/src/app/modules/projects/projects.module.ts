import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProjectsComponent } from './projects.component'
import { CoreModule } from '@core/core.module'
import { ProjectsRoutingModule } from './projects.routing'

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
