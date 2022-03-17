import { Test, TestingModule } from '@nestjs/testing';
import { ProductHttpController } from './product-http.controller';

describe('ProductController', () => {
  let controller: ProductHttpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductHttpController],
    }).compile();

    controller = module.get<ProductHttpController>(ProductHttpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
