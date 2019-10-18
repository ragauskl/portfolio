import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent {
  @Input() idleText = 'submit'
  @Input() invalidText = 'form incomplete'
  @Input() error?: string
  @Input() valid = true
  @Input() loading = false
  @Input() stopable = false
  @Input() multi = false

  @Output() click = new EventEmitter()
  @Output() stop = new EventEmitter()
  @Output() reset = new EventEmitter()
  // If invalid - animate to invalid (based on screen size), do not allow clicks
  // If valid emit clicked
  // When loading set from false to true - animate loading
  // When loading set from true to false, and no error - animate to complete - if multi, emit reset and move to normal state
  //   If set to error from none - animate to error, wait for a bit - animate to normal
}
