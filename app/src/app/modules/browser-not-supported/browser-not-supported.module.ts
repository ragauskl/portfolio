import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserNotSupportedComponent } from './browser-not-supported.component'
import { BrowserNotSupportedRoutingModule } from './browser-not-supported.routing'

@NgModule({
  declarations: [BrowserNotSupportedComponent],
  imports: [
    CommonModule,
    BrowserNotSupportedRoutingModule
  ]
})
export class BrowserNotSupportedModule { }
