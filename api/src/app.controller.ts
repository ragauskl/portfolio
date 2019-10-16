import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  getHealthcheck (): string {
    return `API is live.`
  }
}
