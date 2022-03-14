import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('hello2', process.env.CLIENT_SERVER_HOST);

  app.enableCors({ credentials: true, origin: process.env.CLIENT_SERVER_HOST });

  await app.listen(8081);
}

bootstrap();
