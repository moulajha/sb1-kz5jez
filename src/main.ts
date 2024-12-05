import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { validationConfig, serverConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe(validationConfig));

  await app.listen(serverConfig.port);
  console.log(`Server running on http://${serverConfig.host}:${serverConfig.port}`);
}

bootstrap();