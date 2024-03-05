import { SubscriptionEntity } from '../entities/subscription.entity';

export interface SubscriptionRepositoryInterface {
  create(subscription: SubscriptionEntity): Promise<void>;
  findActive(): Promise<SubscriptionEntity[]>;
}
