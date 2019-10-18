import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './lib/material.module'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { AngularResizedEventModule } from 'angular-resize-event'
import { ContactFormComponent } from './components/contact-form/contact-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ProgressButtonComponent } from './components/progress-button/progress-button.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component'
@NgModule({
  declarations: [
    SidenavComponent,
    ContactFormComponent,
    ProgressButtonComponent,
    SubmitButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularResizedEventModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    SidenavComponent,
    AngularResizedEventModule,
    ContactFormComponent,
    ReactiveFormsModule,
    ProgressButtonComponent
  ]
})
export class CoreModule { }
