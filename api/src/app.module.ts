import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { EmailsModule } from './controllers/emails/emails.module'
import { RouterModule, Routes } from 'nest-router'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

@Module({
  imports: [
    EmailsModule,
    GraphQLModule.forRoot({
      include: [EmailsModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    })
    // RouterModule.forRoutes(AppModule.routes)
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
