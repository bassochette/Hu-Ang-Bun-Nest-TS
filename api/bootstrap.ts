import { Logger } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'compression';
import helmet from 'helmet';
import { AppModule } from './app.module';

const app = await NestFactory.create<NestApplication>(AppModule);

/* Middleware */
app.enableCors();
app.use(helmet());
app.use(compression())

/* Open API */
const openAPIConfig = new DocumentBuilder()
    .setTitle('🦊 API')
    .setDescription('The 🦊 API description')
    .addServer('http://localhost:3000')
    .setVersion('1.0')
    .build()

const document = SwaggerModule.createDocument(app, openAPIConfig);
SwaggerModule.setup('swagger', app, document);
  
/* Start */
const port = process.env.PORT || 3000;
await app.listen(port);
Logger.log(`🦊 API：started on port ${port} 🦊`);
