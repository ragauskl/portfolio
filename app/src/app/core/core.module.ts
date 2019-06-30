import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './lib/material.module'
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent
  ]
})
export class CoreModule { }
