import { Module } from '@nestjs/common';
import { AppController } from '../../controllers/app/app.controller';
import { AppServicesService } from '../services/use-cases/app/app-services.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppServicesService],
})
export class AppModule {}
