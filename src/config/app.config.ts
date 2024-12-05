import { ValidationPipeOptions } from '@nestjs/common';

export const validationConfig: ValidationPipeOptions = {
  whitelist: true,
  transform: true,
  forbidNonWhitelisted: true,
};

export const serverConfig = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
};