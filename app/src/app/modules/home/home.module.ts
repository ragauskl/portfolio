import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home.routing'
import { CoreModule } from '@core/core.module'
import { IntroComponent } from './intro/intro.component'
import { WavesComponent } from './intro/waves/waves.component'
import { ImgBubblesComponent } from './intro/img-bubbles/img-bubbles.component'
@NgModule({
  declarations: [HomeComponent, IntroComponent, WavesComponent, ImgBubblesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
