import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../../../config/app.config';
import { ProductModule } from '../product/db/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from '../../../config/orm.config';
import { ProductHttpModule } from '../product/http/product-http.module';

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
