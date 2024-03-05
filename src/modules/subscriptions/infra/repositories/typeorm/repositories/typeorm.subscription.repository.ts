import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { SubscriptionRepositoryInterface } from 'src/modules/subscriptions/domain/repositories/subscription.repository.interface';
import { TypeormSubscriptionModel } from '../models/typeorm.subscription.model';
import { SubscriptionEntity } from 'src/modules/subscriptions/domain/entities/subscription.entity';
import { TypeormSubscriptionMapper } from '../mappers/typeorm.subscription.mapper';

@Injectable()
export class TypeormSubscriptionRepository
  implements SubscriptionRepositoryInterface
{
  constructor(
    @InjectRepository(TypeormSubscriptionModel)
    private repository: Repository<TypeormSubscriptionModel>,
  ) {}

  async create(entity: SubscriptionEntity): Promise<void> {
    console.log('entity: ', entity);

    const model = TypeormSubscriptionMapper.toModel(entity);

    console.log('model: ', model);

    await this.repository.save(this.repository.create(model));
  }

  async findActive(): Promise<SubscriptionEntity[]> {
    const list = await this.repository.find({
      where: { isActive: true },
      order: { name: 'ASC' },
    });

    return TypeormSubscriptionMapper.toEntityList(list);
  }
}
