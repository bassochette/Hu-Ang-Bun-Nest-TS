/**
 * Browse the app sources in order and write the open-api json definition to file.
 */
import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const app = await NestFactory.create<NestApplication>(AppModule);

const openAPIConfig = new DocumentBuilder()
  .setTitle('🦊 API')
  .setDescription('The 🦊 API description')
  .addServer('http://localhost:3000')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, openAPIConfig);

await Bun.write('openapi.json', JSON.stringify(document, null, 2));
