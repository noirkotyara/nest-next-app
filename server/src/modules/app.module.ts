import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from 'configs';
import { DataServicesModule } from '../services/data-services/data-services/data-services.module';
import { ProductModule } from './product.module';
import { AppController } from '../../controllers/app/app.controller';
import { AppServicesService } from '../services/use-cases/app/app-services.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      load: [appConfig],
    }),
    // DataServicesModule,
    // ProductModule,
  ],
  controllers: [AppController],
  providers: [AppServicesService],
})
export class AppModule {}
