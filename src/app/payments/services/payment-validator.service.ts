import { Injectable } from '@angular/core';

@Injectable()
export class PaymentValidatorService {

  constructor() { }

  checkDateFormat(date: string) {
    let format = /\d{4}[-]\d{2}[-]\d{2}$/;
    if (format.test(date)) {
      console.log("ok");
      this.dateIsValid(date);
    } else {
      console.log("Format daty niepoprawny");
    }
    return null;
  }

  dateIsValid(date: string) {
    let dateTab = date.split('-');
    let rawDate = {
      year: parseInt(dateTab[0]),
      month: parseInt(dateTab[1]),
      day: parseInt(dateTab[2])
    }
    if (rawDate.year > 2021 && rawDate.year < 2100) {
      if (rawDate.month > 0 && rawDate.month < 13) {
        this.daysAmount(rawDate.month, rawDate.year);
      } else {
        console.log("Data nie poprawna");
      }
    } else {
      console.log("Data nie poprawna");
    }
  }

  daysAmount(month: number, year: number) {
    if (month == 2 && year % 4 != 0) {
      console.log("28");
    } else if (month == 2 && year % 4 == 0) {
      console.log("29");
    } else if (month < 8 && month % 2 != 0) {
      console.log("31");
    } else if (month < 8 && month % 2 == 0) {
      console.log("30");
    } else if (month < 13 && month % 2 != 0) {
      console.log("30");
    } else if (month < 13 && month % 2 == 0) {
      console.log("31");
    } else {
      console.log("data niepoprawna")
    }
  }

}
