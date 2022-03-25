import { Module } from '@nestjs/common';
import { ProductServicesModule } from '../services/use-cases/product/product-services.module';
import { ProductController } from '../../controllers/product.controller';

@Module({
  imports: [ProductServicesModule],
  providers: [ProductController],
  controllers: [ProductController],
})
export class ProductModule {}
