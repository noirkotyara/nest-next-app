import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../../core/abstracts/data-services.abstract';
import { ProductFactoryService } from './product-factory.service';
import { ProductBasicDto } from '../../../core/dtos/product/product-basic.dto';

@Injectable()
export class ProductServicesService {
  constructor(
    private dataServices: IDataServices,
    private productFactoryService: ProductFactoryService,
  ) {}

  async getAllProducts(): Promise<ProductBasicDto[]> {
    const productEntityList = await this.dataServices.products.getAll();
    const productList = productEntityList.map((productEntity) => {
      return this.productFactoryService.transformToObject(productEntity);
    });

    return productList;
  }
}
