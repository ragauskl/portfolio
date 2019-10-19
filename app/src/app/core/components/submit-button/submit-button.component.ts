import { Component, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent {
  hovered = false

  @Input() idleText = 'submit'
  @Input() error?: string
  @Input() valid = true
  @Input() loading = false
  @Input() stopable = false
  @Input() multi = false
  @Input() form!: FormGroup

  @Output() submit = new EventEmitter()
  @Output() stop = new EventEmitter()
  @Output() reset = new EventEmitter()
  // If invalid - animate to invalid (based on screen size), do not allow clicks
  // If valid emit clicked
  // When loading set from false to true - animate loading
  // When loading set from true to false, and no error - animate to complete - if multi, emit reset and move to normal state
  //   If set to error from none - animate to error, wait for a bit - animate to normal
  @HostListener('click')
  click () {
    if (this.canSubmit) this.submit.emit()
    else this.form.markAllAsTouched()
  }

  @HostListener('mouseenter')
  mouseEnter () {
    this.hovered = true
  }

  @HostListener('mouseleave')
  mouseLeave () {
    this.hovered = false
  }

  get canSubmit () {
    return this.valid && !this.error
  }
}
