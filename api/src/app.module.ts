import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { EmailsModule } from './controllers/emails/emails.module'
import { RouterModule, Routes } from 'nest-router'

@Module({
  imports: [
    EmailsModule,
    RouterModule.forRoutes(AppModule.routes)
  ],
  controllers: [
    AppController
  ]
})
export class AppModule {
  static routes: Routes = [
    {
      path: '/emails',
      module: EmailsModule,
      children: EmailsModule.routes
    }
  ]
}
