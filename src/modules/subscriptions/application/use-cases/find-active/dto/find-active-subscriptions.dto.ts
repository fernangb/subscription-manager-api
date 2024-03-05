import { SubscriptionEntity } from 'src/modules/subscriptions/domain/entities/subscription.entity';

export type FindActiveSubscriptionsInputDto = void;

export type FindActiveSubscriptionsOutputDto = SubscriptionEntity[];
