import { Module } from '@nestjs/common';
import { CreateSubscriptionService } from './use-cases/create/create-subscription.service';
import { TypeormSubscriptionRepository } from '../infra/repositories/typeorm/repositories/typeorm.subscription.repository';
import { TypeormSubscriptionModel } from '../infra/repositories/typeorm/models/typeorm.subscription.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateSubscriptionController } from './use-cases/create/create-subscription.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TypeormSubscriptionModel])],
  controllers: [CreateSubscriptionController],
  providers: [
    CreateSubscriptionService,
    {
      provide: 'SubscriptionRepository',
      useClass: TypeormSubscriptionRepository,
    },
  ],
  exports: [
    {
      provide: 'SubscriptionRepository',
      useClass: TypeormSubscriptionRepository,
    },
  ],
})
export class SubscriptionModule {}
