export class PaymentProperties {

  constructor() {
  }

  private _user = "";
  private _paymentType = "";
  private _from : Date =new Date();
  private _to : Date = new Date();
  private _term : Date = new Date();
  private _sum = 0;

  get from(): Date {
    return this._from;
  }

  set from(value: Date) {
    this._from = value;
  }

  get to(): Date {
    return this._to;
  }

  set to(value: Date) {
    this._to = value;
  }

  get term(): Date {
    return this._term;
  }

  set term(value: Date) {
    this._term = value;
  }

  get sum(): number {
    return this._sum;
  }

  set sum(value: number) {
    this._sum = value;
  }

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }

  get paymentType(): string {
    return this._paymentType;
  }

  set paymentType(value: string) {
    this._paymentType = value;
  }
}
