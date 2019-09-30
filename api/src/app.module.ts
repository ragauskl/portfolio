import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EmailsModule } from './controllers/emails/emails.module'
import { RouterModule, Routes } from 'nest-router'
@Module({
  imports: [
    EmailsModule,
    RouterModule.forRoutes(AppModule.routes)
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
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
