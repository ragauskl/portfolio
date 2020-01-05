import { Directive, Output, AfterContentInit, EventEmitter } from '@angular/core'

@Directive({ selector: '[rendered]' })
export class RenderedDirective implements AfterContentInit {
  @Output('rendered')
    public after: EventEmitter<RenderedDirective> = new EventEmitter()

  public ngAfterContentInit () {
    setTimeout(() => {
      // timeout prevents unexpected change errors
      this.after.next(this)
    })
  }
}
