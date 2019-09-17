import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './lib/material.module'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { AngularResizedEventModule } from 'angular-resize-event'
@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularResizedEventModule
  ],
  exports: [
    MaterialModule,
    SidenavComponent,
    AngularResizedEventModule
  ]
})
export class CoreModule { }
