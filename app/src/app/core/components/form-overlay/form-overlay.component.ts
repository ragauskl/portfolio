import { Component, Input } from '@angular/core'
import { trigger, state, style, transition, animate, group, animateChild, query } from '@angular/animations'

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
      transition('hidden => *', group([
        query('@*', animateChild(), { optional: true }),
        animate('100ms')
      ])),
      transition('* => hidden', group([
        query('@*', animateChild(), { optional: true }),
        animate('100ms')
      ]))
    ]),
    trigger('scaleUp', [
      state('hidden', style({
        transform: 'scale(0.1)'
      })),
      state('errored', style({
        transform: 'scale(1)'
      })),
      state('complete', style({
        transform: 'scale(1)'
      })),
      transition('hidden => *', [
        animate('300ms 150ms')
      ]),
      transition('* => hidden', [
        animate('400ms')
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
