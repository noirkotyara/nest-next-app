import { Module } from '@nestjs/common';
import { ProductModule } from '../db/product.module';
import { ProductHttpService } from './product-http.service';
import { ProductHttpController } from './product-http.controller';

@Module({
  imports: [ProductModule],
  controllers: [ProductHttpController],
  providers: [ProductHttpService],
})
export class ProductHttpModule {}
