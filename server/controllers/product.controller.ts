import { Controller, Get } from '@nestjs/common';
import { ProductServicesService } from '../src/services/use-cases/product/product-services.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productServices: ProductServicesService) {}

  @Get()
  getAllProducts() {
    return this.productServices.getAllProducts();
  }
}
