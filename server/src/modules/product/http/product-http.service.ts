import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'entities/product.entity';
import { ProductService } from '../db/product.service';

@Injectable()
export class ProductHttpService {
  constructor(private productService: ProductService) {}

  findAll(): Promise<ProductEntity[]> {
    return this.productService.findAll();
  }
}
