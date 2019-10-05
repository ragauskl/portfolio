import { decryptVariables, validateVariables } from '@utils/env.util'
decryptVariables()
validateVariables()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { logger } from 'middlewares/logger.middleware'
import cors from 'cors'
import limiter from 'express-rate-limit'

async function bootstrap () {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      trustProxy: true
    })
  )

  app.use(logger({
    colorize: true
  }))
  app.use(limiter({
    // 10 req/s
    windowMs: 60 * 1000,
    max: 600
  }))
  app.use(cors())

  await app.listen(3000)
  console.log('Server up')
}

bootstrap()
