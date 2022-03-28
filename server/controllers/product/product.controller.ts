import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductServicesService } from '../../src/services/use-cases/product/product-services.service';
import { ProductCreateDto } from '../../src/core/dtos/product/product-create.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productServices: ProductServicesService) {}

  @Get()
  getAllProducts() {
    return this.productServices.getAllProducts();
  }

  // TODO: make a normal response handler
  @Post()
  @UsePipes(new ValidationPipe())
  createNewProduct(@Body() productInfo: ProductCreateDto) {
    return this.productServices.createNewProduct(productInfo);
  }
}
