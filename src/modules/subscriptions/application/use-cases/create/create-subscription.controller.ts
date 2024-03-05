import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateSubscriptionService } from './create-subscription.service';
import { CreateSubscriptionInputDto } from './dto/create-subscription.dto';

@Controller('subscriptions')
@ApiTags('Subscription')
export class CreateSubscriptionController {
  constructor(
    private readonly createSubscriptionUseCase: CreateSubscriptionService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a Subscription' })
  @ApiResponse({
    status: 201,
    description: 'Created Subscription',
  })
  async create(@Body() createSubscriptionDto: CreateSubscriptionInputDto) {
    console.log(createSubscriptionDto);
    await this.createSubscriptionUseCase.execute(createSubscriptionDto);
  }
}
