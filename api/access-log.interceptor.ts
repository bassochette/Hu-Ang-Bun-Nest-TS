import {
  CallHandler,
  ExecutionContext,
  Logger,
  NestInterceptor,
  Request,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

export class AccessLogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        Logger.log(
          `[${request.method}] ${request.url} - ${Date.now() - start}ms`,
          'ACCESS',
        );
      }),
    );
  }
}
