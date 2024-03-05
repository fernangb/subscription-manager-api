export class Currency {
  value: number;

  constructor(value: number) {
    this.value = value;

    this.validate();
  }

  validate() {
    if (this.value < 0) throw new Error('Preço não pode ser negativo');
  }
}
