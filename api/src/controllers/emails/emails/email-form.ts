import { ObjectType, Field, InputType } from '@nestjs/graphql'
import { ContactForm } from '@prtf/shared'

@ObjectType()
export class EmailForm extends ContactForm {

  @Field()
  readonly name: string

  @Field()
  readonly replyTo: string

  @Field()
  readonly message: string
}
