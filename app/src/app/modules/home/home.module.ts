import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home.routing'
import { CoreModule } from '@core/core.module'
import { IntroComponent } from './intro/intro.component'
import { ImgBubblesComponent } from './intro/img-bubbles/img-bubbles.component'
import { ContactMeComponent } from './contact-me/contact-me.component'
import { WavesComponent } from './components/waves/waves.component'
import { ExperienceSectionComponent } from './experience-section/experience-section.component'
import { CardCarouselComponent } from './experience-section/card-carousel/card-carousel.component'

@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    WavesComponent,
    ImgBubblesComponent,
    ContactMeComponent,
    ExperienceSectionComponent,
    CardCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
