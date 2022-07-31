import {Injectable} from '@angular/core';
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class DateFormatterService {

  constructor() {
  }

  dateFormat(date: NgbDate): string {
    if (date.day < 10 && date.month < 10) {
      return ("0" + date.day + "." + "0" + date.month + "." + date.year);
    } else if (date.day < 10 && date.month > 9) {
      return ("0" + date.day + "." + date.month + "." + date.year);
    } else if (date.day > 9 && date.month < 10) {
      return (date.day + "." + "0" + date.month + "." + date.year);
    } else {
      return (date.day + "." + date.month + "." + date.year);
    }
  }

  ngbToDate(date: NgbDate) {
    return new Date(date.year, date.month, date.day);
  }

}
