import { Controller, Get } from '@nestjs/common';
import { ProductHttpService } from './product-http.service';

@Controller('product')
export class ProductHttpController {
  constructor(private readonly productHttpService: ProductHttpService) {}

  @Get()
  getAllProducts() {
    return this.productHttpService.findAll();
  }
}
