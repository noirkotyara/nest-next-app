import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  await app.listen(8081);
}

bootstrap();
