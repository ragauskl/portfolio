import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import * as moduleAlias from 'module-alias'
import * as path from 'path'

moduleAlias.addAliases({
  '@root': path.join(__dirname, '')
})

async function bootstrap () {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  // NOTE: Add '0.0.0.0' if used in docker
  await app.listen(3000)
}
bootstrap()
