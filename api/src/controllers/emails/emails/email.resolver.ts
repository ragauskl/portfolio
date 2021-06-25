import { Post, Body, Header } from '@nestjs/common'
import { ValidationPipe } from '@pipes/validation.pipe'
import Email from '@utils/email.util'
import { ContactForm } from '@prtf/shared'
import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql'
import { EmailForm } from './email-form'

@Resolver()
export class EmailResolver {

  // @Post()
  // @Header('Cache-Control', 'none')
  // async sendEmail (
  //   @Body(new ValidationPipe()) contactForm: ContactForm
  // ) {
  //   await Email.sendEmail(contactForm.name, contactForm.replyTo, contactForm.message)
  // }

  @Query(returns => EmailForm)
  emails (
    @Args() email: string
  ) {
    return {
      message: 'Message',
      name: 'Name',
      replyTo: 'Reply To'
    } as EmailForm
  }

  @Mutation(returns => Int)
  async sendEmail (
    @Args('form', { type: () => EmailForm }) contactForm: EmailForm
  ) {
    await Email.sendEmail(contactForm.name, contactForm.replyTo, contactForm.message)
    return 1
  }
}
