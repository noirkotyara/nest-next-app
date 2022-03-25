import { Controller, Get } from '@nestjs/common';
import { AppServicesService } from '../../src/services/use-cases/app/app-services.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appConfig: ConfigService,
    private readonly appService: AppServicesService,
  ) {}

  @Get()
  receivePong(): string {
    return this.appService.sendPing();
  }
}
