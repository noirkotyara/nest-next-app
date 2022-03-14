import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ credentials: true, origin: ['http://localhost:3005', process.env.CLIENT_SERVER_HOST] });

  await app.listen(8081);
}
bootstrap();
