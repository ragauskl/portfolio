import { Component, Input } from '@angular/core'
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-form-overlay',
  templateUrl: './form-overlay.component.html',
  styleUrls: ['./form-overlay.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('hidden', style({
        opacity: 0
      })),
      state('errored', style({
        opacity: 1,
        pointerEvents: 'initial'
      })),
      state('complete', style({
        opacity: 1,
        pointerEvents: 'initial'
      })),
      transition('hidden => *', [
        animate('300ms')
      ]),
      transition('* => hidden', [
        animate('200ms')
      ])
    ])
  ]
})
export class FormOverlayComponent {
  @Input() complete = false
  @Input() error?: string

  get state () {
    return !this.complete ? 'hidden' : (this.error ? 'errored' : 'complete')
  }
}
