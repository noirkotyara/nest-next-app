import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { envVariables } from '../src/utils/env-variables';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: envVariables.POSTGRES_HOST,
  port: parseInt(envVariables.POSTGRES_PORT),
  username: envVariables.POSTGRES_USERNAME,
  password: envVariables.POSTGRES_PASSWORD,
  database: envVariables.POSTGRES_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
