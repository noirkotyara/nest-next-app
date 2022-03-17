import { envVariables } from '../src/utils/env-variables';
import { ConnectionOptions } from 'typeorm';

export const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: envVariables.POSTGRES_HOST,
  port: parseInt(envVariables.POSTGRES_PORT),
  username: envVariables.POSTGRES_USERNAME,
  password: envVariables.POSTGRES_PASSWORD,
  database: envVariables.POSTGRES_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
