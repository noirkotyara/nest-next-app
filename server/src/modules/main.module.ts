import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from 'configs';
import { DataServicesModule } from '../services/data-services/data-services/data-services.module';
import { ProductModule } from './product.module';
import { AppModule } from './app.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      load: [appConfig],
    }),
    DataServicesModule,
    ProductModule,
    AppModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
