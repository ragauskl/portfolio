import { Module } from '@nestjs/common'
import { Routes } from 'nest-router'
import { EmailResolver } from './emails/email.resolver'
// import { EmailsController } from './emails/emails.controller'

@Module({
  // controllers: [EmailsController]
  providers: [EmailResolver],
  exports: [EmailResolver]
})
export class EmailsModule {
  static routes: Routes = []
}
