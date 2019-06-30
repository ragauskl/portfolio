import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: '', loadChildren: `./modules/home/home.module#HomeModule` },
  { path: 'error', loadChildren: `./modules/error/error.module#ErrorModule` },
  { path: 'posts', loadChildren: `./modules/posts/posts.module#PostsModule` },
  { path: 'contact', loadChildren: `./modules/contact/contact.module#ContactModule` },
  { path: 'about-me', loadChildren: `./modules/about-me/about-me.module#AboutMeModule` },
  { path: 'browser-not-supported', loadChildren: `./modules/browser-not-supported/browser-not-supported.module#BrowserNotSupportedModule` },
  { path: '**', redirectTo: `error/404` }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
