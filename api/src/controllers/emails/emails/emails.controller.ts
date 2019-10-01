import { Controller, Post, Body, Header, Get } from '@nestjs/common'
import { ContactForm } from './contact-form.model'
import { ValidationPipe } from '@pipes/validation.pipe'

@Controller()
export class EmailsController {
  @Post()
  @Header('Cache-Control', 'none')
  sendEmail (
    @Body(new ValidationPipe()) contactForm: ContactForm
  ) {
    //
  }
}
