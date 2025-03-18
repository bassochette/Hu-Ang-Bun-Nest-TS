import { Logger } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

const app = await NestFactory.create<NestApplication>(AppModule);

app.enableCors();

app.use(helmet());

const port = process.env.PORT || 3000;
await app.listen(port);

Logger.log(`🦊 API：started on port ${port} 🦊`);
