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
import { NoScrollDirective } from './directives/no-scroll.directive'
import { ScrollBlockComponent } from './components/scroll-block/scroll-block.component'
import { TrackScrollDirective } from './directives/track-scroll.directive'
import { ProjectsListComponent } from './components/projects-list/projects-list.component'
import { PostCoverComponent } from './components/post-cover/post-cover.component'
import { MomentPipe } from './pipes/moment.pipe'
import { ImageShatterComponent } from './components/image-shatter/image-shatter.component'
import { RouterModule } from '@angular/router'
import { InViewDirective } from './directives/in-view.directive'
import { HorizontalTabPairComponent } from './components/layout/horizontal-tab-pair/horizontal-tab-pair.component';
import { LinkListComponent } from './components/link-list/link-list.component'

@NgModule({
  declarations: [
    NavBarComponent,
    ContactFormComponent,
    ProgressButtonComponent,
    FormOverlayComponent,
    FooterComponent,
    ArrowScrollComponent,
    RenderedDirective,
    NoScrollDirective,
    ScrollBlockComponent,
    TrackScrollDirective,
    ProjectsListComponent,
    PostCoverComponent,
    MomentPipe,
    ImageShatterComponent,
    InViewDirective,
    HorizontalTabPairComponent,
    LinkListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularResizedEventModule,
    ReactiveFormsModule,
    RouterModule
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
    RenderedDirective,
    NoScrollDirective,
    ScrollBlockComponent,
    TrackScrollDirective,
    ProjectsListComponent,
    MomentPipe,
    ImageShatterComponent,
    InViewDirective,
    HorizontalTabPairComponent,
    LinkListComponent
  ]
})
export class CoreModule { }
