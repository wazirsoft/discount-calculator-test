import { Injectable } from '@nestjs/common';
import DiscountDto from './dto/discount.dto';
import DiscountResponseDto from './dto/discountResponse.dto';

@Injectable()
export default class CalculatorService {
  calculateDiscount({
    price,
    discountPercent,
  }: DiscountDto): DiscountResponseDto {
    const discount = (price * discountPercent) / 100;
    const priceAfterDiscount = price - discount;

    return {
      discount,
      priceAfterDiscount,
    };
  }
}
