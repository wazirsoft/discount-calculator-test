import { Body, Controller, Post } from '@nestjs/common';
import DiscountDto from './dto/discount.dto';
import CalculatorService from './calculator.service';
import DiscountResponseDto from './dto/discountResponse.dto';

@Controller('api/v1/calculate')
export default class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('discount')
  post(@Body() data: DiscountDto): DiscountResponseDto {
    return this.calculatorService.calculateDiscount(data);
  }
}
