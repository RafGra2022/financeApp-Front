import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaymentProperties} from "../bill/paymentProperties";
import {PaymentExposition} from "../bill/paymentExposition";

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  payments: Array<PaymentExposition> = [];

  @Output()
  isFormVisible: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  isTableVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  add() {
    this.isFormVisible.emit(true);
    this.isTableVisible.emit(false);
  }
}
