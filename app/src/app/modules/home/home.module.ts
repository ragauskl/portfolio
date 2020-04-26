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
import { CardCarouselComponent } from './experience-section/card-carousel/card-carousel.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { HorizontalSkillBarComponent } from './skills-section/horizontal-skill-bar/horizontal-skill-bar.component'

@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    WavesComponent,
    ImgBubblesComponent,
    ContactMeComponent,
    ExperienceSectionComponent,
    CardCarouselComponent,
    FeaturedProjectsComponent,
    SkillsSectionComponent,
    HorizontalSkillBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
