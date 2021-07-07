import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BrowserSupportGuard } from '@core/route-guards/browser-support.guard'
import { BrowserNotSupportedGuard } from '@core/route-guards/browser-not-supported.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [BrowserSupportGuard]
  },
  {
    path: 'error',
    loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule),
    canActivate: [BrowserSupportGuard]
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule),
    canActivate: [BrowserSupportGuard]
  },
  {
    path: 'browser-not-supported',
    loadChildren: () => import('./modules/browser-not-supported/browser-not-supported.module').then(m => m.BrowserNotSupportedModule),
    canActivate: [BrowserNotSupportedGuard]
  },
  { path: '**', redirectTo: `error/404` }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
