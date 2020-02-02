import { Component, EventEmitter, Output, Input, HostListener } from '@angular/core'
import { trigger, state, style, transition, animate, stagger, keyframes, animateChild, query, group } from '@angular/animations'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss'],
  animations: [
    trigger('buttonShrink', [
      state('idle', style({
        height: '2.5em',
        minWidth: '5em',
        opacity: 1
      })),
      state('loading', style({
        height: '2.5em',
        width: '2.5em',
        padding: '0',
        minWidth: '0',
        borderRadius: '50px',
        opacity: 0,
        pointerEvents: 'none'
      })),
      transition('idle => loading', group([
        query('@*', animateChild(), { optional: true }),
        animate('170ms ease', keyframes([
          style({
            offset: 0,
            height: '2.5em',
            minWidth: '5em',
            opacity: 1
          }),
          style({
            offset: 0.99,
            height: '2.5em',
            width: '2.5em',
            padding: '0',
            minWidth: '0',
            borderRadius: '50px'
          }),
          style({
            offset: 1,
            opacity: 0
          })
        ]))
      ])),
      transition('loading => idle', group([
        query('@*', animateChild(), { optional: true }),
        animate('170ms 100ms ease', keyframes([
          style({
            offset: 0,
            opacity: 0
          }),
          style({
            offset: 0.01,
            height: '2.5em',
            width: '2.5em',
            padding: '0',
            minWidth: '0',
            borderRadius: '50px'
          }),
          style({
            offset: 1,
            height: '2.5em',
            minWidth: '5em',
            opacity: 1
          })
        ]))
      ]))
    ]),
    trigger('textFade', [
      state('idle', style({
        opacity: 1
      })),
      state('loading', style({
        opacity: 0
      })),
      transition('idle => loading', [
        animate('70ms')
      ]),
      transition('loading => idle', [
        animate('70ms 100ms')
      ])
    ]),
    trigger('highlight', [
      transition('idle => loading', [
        animate('400ms 170ms', keyframes([
          style({
            offset: 0,
            opacity: '0'
          }),
          style({
            offset: 0.1,
            opacity: '1',
            background: 'rgba(226, 220, 255, 0.9)',
            border: '5px solid rgba(226, 220, 255, 0.9)'
          }),
          style({
            offset: 0.6,
            transform: 'scale(1.6)',
            background: 'transparent',
            border: '1px solid rgba(226, 220, 255, 0.6)'
          }),
          style({
            offset: 1,
            transform: 'scale(2)',
            background: 'transparent',
            border: '0px solid transparent'
          })
        ]))
      ])
    ]),
    trigger('spinnerFade', [
      state('idle', style({
        opacity: 0
      })),
      state('loading', style({
        opacity: 1
      })),
      transition('idle => loading', [
        animate('70ms 170ms')
      ]),
      transition('loading => idle', [
        animate('0ms')
      ])
    ])
  ]
})

export class ProgressButtonComponent {
  hovered = false

  @Input() text = 'Submit'
  @Input() disabled = false
  @Input() loading = false
  @Output() submit = new EventEmitter()
  @Input() valid = true
  @Input() form: FormGroup

  @HostListener('mouseenter')
  mouseEnter () {
    this.hovered = true
  }

  @HostListener('mouseleave')
  mouseLeave () {
    this.hovered = false
  }

  get state () {
    return !this.loading ? 'idle' : 'loading'
  }

  onClick () {
    if (!this.valid) {
      if (this.form) this.form.markAllAsTouched()
      return
    }
    if (!this.loading && !this.disabled) {
      this.submit.emit()
    }
  }
}
