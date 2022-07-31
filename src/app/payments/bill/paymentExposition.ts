export class PaymentExposition{

  constructor() {
  }
  private _from ="";
  private _to ="";
  private _term ="";
  private _sum = 0;


  get from(): string {
    return this._from;
  }

  set from(value: string) {
    this._from = value;
  }

  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }

  get term(): string {
    return this._term;
  }

  set term(value: string) {
    this._term = value;
  }

  get sum(): number {
    return this._sum;
  }

  set sum(value: number) {
    this._sum = value;
  }
}
