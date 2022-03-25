import { Module } from '@nestjs/common';
import { AppController } from '../../../controllers/app/app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from 'configs';
import { DataServicesModule } from '../../services/data-services/data-services/data-services.module';
import { ProductModule } from '../product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      load: [appConfig],
    }),
    DataServicesModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
