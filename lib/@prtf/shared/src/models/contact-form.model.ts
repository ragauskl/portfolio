import { IsString } from 'class-validator'

export class ContactForm {
  @IsString()
  readonly name: string

  @IsString()
  readonly replyTo: string

  @IsString()
  readonly message: string
}
