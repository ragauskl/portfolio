import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BrowserSupportGuard } from '@core/route-guards/browser-support.guard'
import { BrowserNotSupportedGuard } from '@core/route-guards/browser-not-supported.guard'

const routes: Routes = [
  { path: '', loadChildren: `./modules/home/home.module#HomeModule`, canActivate: [BrowserSupportGuard] },
  { path: 'error', loadChildren: `./modules/error/error.module#ErrorModule`, canActivate: [BrowserSupportGuard] },
  { path: 'posts', loadChildren: `./modules/posts/posts.module#PostsModule`, canActivate: [BrowserSupportGuard] },
  { path: 'contact', loadChildren: `./modules/contact/contact.module#ContactModule`, canActivate: [BrowserSupportGuard] },
  { path: 'about-me', loadChildren: `./modules/about-me/about-me.module#AboutMeModule`, canActivate: [BrowserSupportGuard] },
  { path: 'browser-not-supported', loadChildren: `./modules/browser-not-supported/browser-not-supported.module#BrowserNotSupportedModule`, canActivate: [BrowserNotSupportedGuard] },
  { path: '**', redirectTo: `error/404` }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
