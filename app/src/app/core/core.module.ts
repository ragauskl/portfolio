import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './lib/material.module'
import { NavBarComponent } from './components/navbar/navbar.component'
import { AngularResizedEventModule } from 'angular-resize-event'
import { ContactFormComponent } from './components/contact-form/contact-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ProgressButtonComponent } from './components/progress-button/progress-button.component'
import { FormOverlayComponent } from './components/form-overlay/form-overlay.component'
import { FooterComponent } from './components/footer/footer.component'
import { ArrowScrollComponent } from './components/arrow-scroll/arrow-scroll.component'
import { RenderedDirective } from './directives/rendered.directive'

@NgModule({
  declarations: [
    NavBarComponent,
    ContactFormComponent,
    ProgressButtonComponent,
    FormOverlayComponent,
    FooterComponent,
    ArrowScrollComponent,
    RenderedDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularResizedEventModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    NavBarComponent,
    AngularResizedEventModule,
    ContactFormComponent,
    ReactiveFormsModule,
    ProgressButtonComponent,
    FooterComponent,
    ArrowScrollComponent,
    RenderedDirective
  ]
})
export class CoreModule { }
