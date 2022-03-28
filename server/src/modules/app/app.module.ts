import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { appConfig, ormConfig } from 'configs';
import { ProductHttpModule } from '../product/http/product-http.module';
import { TypeOrmModule } from '@nestjs/typeorm';

require('dotenv').config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      load: [appConfig],
    }),
    TypeOrmModule.forRoot(ormConfig),
    ProductHttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
