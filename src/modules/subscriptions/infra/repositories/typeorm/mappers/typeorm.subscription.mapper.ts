import { SubscriptionEntity } from 'src/modules/subscriptions/domain/entities/subscription.entity';
import { TypeormSubscriptionModel } from '../models/typeorm.subscription.model';

export class TypeormSubscriptionMapper {
  static toEntity(model: TypeormSubscriptionModel): SubscriptionEntity | null {
    if (!model) return null;

    return new SubscriptionEntity({
      id: model.id,
      name: model.name,
      price: model.price,
      isActive: model.isActive,
      createDate: model.createDate,
      updateDate: model.updateDate,
    });
  }

  static toModel(entity: SubscriptionEntity): TypeormSubscriptionModel | null {
    if (!entity) return null;

    return {
      id: entity.id,
      name: entity.name,
      price: entity.price,
      isActive: entity.isActive,
      createDate: entity.createDate,
      updateDate: entity.updateDate,
    } as TypeormSubscriptionModel;
  }

  static toEntityList(list: TypeormSubscriptionModel[]): SubscriptionEntity[] {
    return list.map((model) => TypeormSubscriptionMapper.toEntity(model));
  }
}
