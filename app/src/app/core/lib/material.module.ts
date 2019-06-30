import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
