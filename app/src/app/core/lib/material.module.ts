import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule
  ]
})
export class MaterialModule { }
