import {Component, OnInit} from '@angular/core';
import {PaymentProperties} from "./paymentProperties";
import {VisibilityProperties} from "./visibilityProperties";
import {LoggerService} from "../../root/logger.service";
import {HttpService} from "../../root/http.service";
import {NgbDate, NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {DateFormatterService} from "../services/date-formatter.service";
import {PaymentExposition} from "./paymentExposition";


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private logger: LoggerService, private http: HttpService, public dateFormatter: DateFormatterService) {

  }

  ngOnInit(): void {
  }

  paymentsView: Array<PaymentExposition> = [];
  payments: Array<PaymentExposition> = [];

  paymentProperties = new PaymentProperties();
  paymentExposition = new PaymentExposition();
  visibilityProperties = new VisibilityProperties();
  count: number = 0;

  sum(event: Event) {
    let inputElement: HTMLInputElement = <HTMLInputElement>event.target;
    this.paymentProperties.sum = parseInt(inputElement.value);
    this.paymentExposition.sum = parseInt(inputElement.value);
  }

  add() {
    this.paymentProperties.user = this.logger.userLogged;
    this.payments.push(this.paymentExposition);

    if (this.payments.length % 7 != 0) {
      this.paymentsView.push(this.payments[this.count]);
      this.count++;
    } else {
      this.paymentsView = [];
      this.paymentsView.push(this.payments[this.count]);
      this.count++;
    }
    this.visibilityProperties.isFormVisible = false;
    this.visibilityProperties.isTableVisible = true;
    this.sendData(this.paymentProperties);
  }

  sendData(data: PaymentProperties) {
    this.http.postData(data, "payments");
  }

}

