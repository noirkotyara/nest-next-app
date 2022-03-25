import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../src/modules/app/app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appConfig: ConfigService,
    private readonly appService: AppService,
  ) {}

  @Get()
  receivePong(): string {
    return this.appService.sendPing();
  }
}
