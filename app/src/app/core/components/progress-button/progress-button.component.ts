import { Component, EventEmitter, Output, Input } from '@angular/core'

@Component({
  selector: 'app-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})
export class ProgressButtonComponent {
  @Input() text = 'Submit'
  @Input() disabled = false
  @Input() loading = false
  @Output() submit = new EventEmitter()

  onClick () {
    if (!this.loading && !this.disabled) {
      this.submit.emit()
    }
  }
}
