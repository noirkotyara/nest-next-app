import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../../../entities/product.entity';
import { Repository } from 'typeorm';
import { ProductService } from '../db/product.service';

@Injectable()
export class ProductHttpService {
  constructor(private productService: ProductService) {}

  findAll(): Promise<ProductEntity[]> {
    return this.productService.findAll();
  }
}
