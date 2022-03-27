import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('service');
    return 'Hello World! Updated';
  }
}
