import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateSubscriptionInputDto {
  @ApiProperty({ example: 'My Sub' })
  @IsString()
  name: string;

  @ApiProperty({ example: 9.9 })
  @IsNumber()
  price: number;
}

export type CreateSubscriptionOutputDto = void;
