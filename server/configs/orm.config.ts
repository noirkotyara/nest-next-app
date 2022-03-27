require('dotenv').config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});
import { ConnectionOptions } from 'typeorm';

export const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
