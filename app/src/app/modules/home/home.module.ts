import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home.routing'
import { CoreModule } from '@core/core.module'
import { IntroComponent } from './intro/intro.component'
import { ImgBubblesComponent } from './intro/img-bubbles/img-bubbles.component'
import { ContactMeComponent } from './contact-me/contact-me.component'
import { WavesComponent } from './components/waves/waves.component'

@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    WavesComponent,
    ImgBubblesComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
