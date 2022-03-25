import { IProductRepository } from './repository/product-repository-services.abstract';
import { ProductEntity } from '../entities/product/product.entity';

export abstract class IDataServices {
  abstract products: IProductRepository<ProductEntity>;
}
