import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  priceNum: number;

  @IsNumber()
  amount: number;
}
