import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppServicesService } from '../../src/services/use-cases/app/app-services.service';
import { ConfigService } from '@nestjs/config';
import { Provider } from '@nestjs/common';

import { configServiceValueMock } from 'test/utils/mock-config-service';
import { createMockModule } from 'test/utils/mock-module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const configModule: Provider = {
      provide: ConfigService,
      useValue: configServiceValueMock,
    };

    const app: TestingModule = await Test.createTestingModule({
      imports: [createMockModule([configModule])],
      controllers: [AppController],
      providers: [AppServicesService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Pong"', () => {
      expect(appController.receivePong()).toBe('Pong');
    });
  });
});
