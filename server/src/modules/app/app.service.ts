import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sendPing(): string {
    return 'Pong';
  }
}
