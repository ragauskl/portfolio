import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ServerErrorComponent } from './server-error/server-error.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ForbiddenComponent } from './forbidden/forbidden.component'

const routes: Routes = [
  { path: '', component: ServerErrorComponent },
  { path: '404', component: NotFoundComponent },
  { path: '403', component: ForbiddenComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
