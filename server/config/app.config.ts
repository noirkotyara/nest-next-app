import { registerAs } from '@nestjs/config';

export default registerAs('app', async () => ({
  clientServerHost: process.env.CLIENT_SERVER_HOST ?? 'http://localhost:3005',
}));
