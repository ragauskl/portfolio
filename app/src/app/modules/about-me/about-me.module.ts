import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AboutMeComponent } from './about-me.component'
import { AboutMeRoutingModule } from './about-me.routing'

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
