import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";
import {DateFormatterService} from "../services/date-formatter.service";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

    constructor(private dateFormatter:DateFormatterService) {
    }

    @Input()
    isCalendarVisible: boolean = false;
    @Output()
    calendarOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
    date: string = "";
    @Output()
    dateSend:EventEmitter<string> = new EventEmitter<string>();
    @Output()
    ngbDate:EventEmitter<NgbDate> = new EventEmitter<NgbDate>();

    calendarToggle() {
        this.calendarOpen.emit(true);
    }

    datePicked(event: NgbDate) {
        // if (event.day < 10 && event.month < 10) {
        //     this.date = "0" + event.day + "." + "0" + event.month + "." + event.year;
        // } else if (event.day < 10 && event.month > 9) {
        //     this.date = "0" + event.day + "." + event.month + "." + event.year;
        // } else if (event.day > 9 && event.month < 10) {
        //     this.date = event.day + "." + "0" + event.month + "." + event.year;
        // } else {
        //     this.date = event.day + "." + event.month + "." + event.year;
        // }
        this.date= this.dateFormatter.dateFormat(event);
        this.isCalendarVisible = false;
        // this.dateSend.emit(this.date);
        let ngbToDate = new Date(event.day,event.month,event.year);
        this.ngbDate.emit(event);
    }

}
