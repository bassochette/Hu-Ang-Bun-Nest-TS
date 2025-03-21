import { Controller, Get } from '@nestjs/common';
import { DateResponseDto } from './dto/date-response.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get('/date')
  @ApiResponse({ status: 200, type: DateResponseDto })
  getCurrentDate(): DateResponseDto {
    return {
      date: new Date().toISOString(),
    };
  }

  @Get('/ping')
  ping(): string {
    return 'pong';
  }
}
