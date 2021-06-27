import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, Injectable } from '@angular/core'

import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { HttpClientModule } from '@angular/common/http'
import { MarkdownModule, MarkedOptions } from 'ngx-markdown'

@Injectable()
export class ScrollHammerConfig extends HammerGestureConfig {
  overrides = {
    'pinch': { enable: false },
    'rotate': { enable: false }
  } as any
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {}
      }
    })
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: ScrollHammerConfig
  }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
