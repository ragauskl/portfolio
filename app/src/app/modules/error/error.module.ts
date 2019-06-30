import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ServerErrorComponent } from './server-error/server-error.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ForbiddenComponent } from './forbidden/forbidden.component'
import { ErrorRoutingModule } from './error.routing'

@NgModule({
  declarations: [ServerErrorComponent, NotFoundComponent, ForbiddenComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
