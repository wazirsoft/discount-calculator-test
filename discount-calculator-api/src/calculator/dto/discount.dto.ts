import { IsNotEmpty, IsNumber } from 'class-validator';

export default class DiscountDto {
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  discountPercent: number;
}
