import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envVariables } from './utils/env-variables';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const whitelist = [envVariables.CLIENT_SERVER_HOST];

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });

  await app.listen(8081);
}

bootstrap();
