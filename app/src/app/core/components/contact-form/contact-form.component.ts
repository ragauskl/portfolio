import { Component } from '@angular/core'
import { ApiService } from '@core/services/api.service'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ContactForm } from '@prtf/shared'
import { handleError } from '@core/utils/app-error'

type FormModel = {
  [key in keyof ContactForm]: FormControl
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  form: FormGroup
  sending = false

  constructor (
    private api: ApiService,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      replyTo: new FormControl(undefined, [
        Validators.required,
        Validators.email
      ]),
      name: new FormControl(undefined, [
        Validators.required
      ]),
      message: new FormControl(undefined, [
        Validators.required
      ])
    } as FormModel)
  }

  async sendForm () {
    if (this.sending) return
    if (!this.form.valid) return

    this.sending = true
    try {
      await this.api.wrapr.Emails().sendContactForm(this.form.value).run()
      this.form.reset()
    } catch (error) {
      handleError(error)
    }

    this.sending = false
  }
}
