import { Controller, Post, Body, Header } from '@nestjs/common'
import { ValidationPipe } from '@pipes/validation.pipe'
import Email from '@utils/email.util'
import { ContactForm } from 'api-wrapper'

@Controller()
export class EmailsController {

  @Post()
  @Header('Cache-Control', 'none')
  async sendEmail (
    @Body(new ValidationPipe()) contactForm: ContactForm
  ) {
    console.log('contactForm:', contactForm)
    await Email.sendEmail(contactForm.name, contactForm.replyTo, contactForm.message)
  }
}
