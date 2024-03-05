import { BaseEntity, BaseEntityProps } from 'src/shared/entities/base.entity';
import { Currency } from 'src/shared/value-objects/currency.vo';

interface SubscriptionProps extends BaseEntityProps {
  name: string;
  price: number;
  isActive?: boolean;
}

export class SubscriptionEntity extends BaseEntity {
  name: string;
  price: number;
  isActive: boolean;

  constructor(props: SubscriptionProps) {
    super({
      id: props.id,
      createDate: props.createDate,
      updateDate: props.updateDate,
    });
    this.name = props.name;
    this.price = new Currency(props.price).value;
    this.isActive = this.isActive === undefined ? true : props.isActive;
  }
}
