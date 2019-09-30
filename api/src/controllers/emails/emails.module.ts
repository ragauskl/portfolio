import { Module } from '@nestjs/common'
import { Routes } from 'nest-router'
import { EmailsController } from './emails/emails.controller'

@Module({
  controllers: [EmailsController]
})
export class EmailsModule {
  static routes: Routes = []
}
