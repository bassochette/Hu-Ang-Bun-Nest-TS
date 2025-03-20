import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/date')
  getCurrentDate(): string {
    return new Date().toISOString();
  }

  @Get('/ping')
  ping(): string {
    return 'pong';
  }
}
