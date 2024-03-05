import { Inject, Injectable } from '@nestjs/common';
import {
  CreateSubscriptionInputDto,
  CreateSubscriptionOutputDto,
} from './dto/create-subscription.dto';
import { UseCaseInterface } from 'src/shared/use-cases/use-case.interface';
import { SubscriptionRepositoryInterface } from 'src/modules/subscriptions/domain/repositories/subscription.repository.interface';
import { SubscriptionEntity } from 'src/modules/subscriptions/domain/entities/subscription.entity';

@Injectable()
export class CreateSubscriptionService
  implements
    UseCaseInterface<CreateSubscriptionInputDto, CreateSubscriptionOutputDto>
{
  constructor(
    @Inject('SubscriptionRepository')
    private readonly repository: SubscriptionRepositoryInterface,
  ) {}

  async execute(props: CreateSubscriptionInputDto): Promise<void> {
    const subscription = new SubscriptionEntity({
      name: props.name,
      price: props.price,
    });

    await this.repository.create(subscription);
  }
}
