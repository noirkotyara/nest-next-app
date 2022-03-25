import { Injectable } from '@nestjs/common';
import { ProductCreateDto } from '../../../core/dtos/product/product-create.dto';
import { ProductEntity } from '../../../core/entities/product/product.entity';
import { ProductBasicDto } from '../../../core/dtos/product/product-basic.dto';

@Injectable()
export class ProductFactoryService {
  createNewEntity(productCreateDto: ProductCreateDto): ProductEntity {
    const productEntity = new ProductEntity();
    productEntity.name = productCreateDto.name;
    productEntity.description = productCreateDto.description;
    productEntity.price = productCreateDto.priceNum;
    productEntity.amount = productCreateDto.amount;

    return productEntity;
  }

  transformToObject(productEntity: ProductEntity): ProductBasicDto {
    const productObject = new ProductBasicDto();
    productObject.name = productEntity.name;
    productObject.description = productEntity.description;
    productObject.priceNum = productEntity.price;
    productObject.amount = productEntity.amount;
    productObject.createdAt = productEntity.created_date;
    productObject.updatedAt = productEntity.updated_date;
    return productObject;
  }
}
