import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostgresDataServices } from './postgres-data-services.service';
import { ProductEntity } from './entities/product.entity';
import { IDataServices } from '../../../core/abstracts/data-services.abstract';

require('dotenv').config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});

console.log('LOGGER FOR HOST', process.env.POSTGRES_HOST);

const sslCheck = {
  ssl: {
    rejectUnauthorized: false,
  },
};

console.log('check_check', Boolean(process.env.POSTGRES_SSL_CHECK));

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
      ...(Boolean(process.env.POSTGRES_SSL_CHECK) && sslCheck),
    }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: PostgresDataServices,
    },
  ],
  exports: [IDataServices],
})
export class PostgresDataServicesModule {}
