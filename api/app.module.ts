import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AccessLogInterceptor } from './access-log.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AccessLogInterceptor,
    },
  ],
})
export class AppModule {}
