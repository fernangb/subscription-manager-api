import { Injectable } from '@nestjs/common';
import { UseCaseInterface } from 'src/shared/use-cases/use-case.interface';
import { SubscriptionRepositoryInterface } from 'src/modules/subscriptions/domain/repositories/subscription.repository.interface';
import {
  FindActiveSubscriptionsInputDto,
  FindActiveSubscriptionsOutputDto,
} from './dto/find-active-subscriptions.dto';

@Injectable()
export class FindActiveSubscriptionsService
  implements
    UseCaseInterface<
      FindActiveSubscriptionsInputDto,
      FindActiveSubscriptionsOutputDto
    >
{
  constructor(private readonly repository: SubscriptionRepositoryInterface) {}

  async execute(): Promise<FindActiveSubscriptionsOutputDto> {
    return this.repository.findActive();
  }
}
