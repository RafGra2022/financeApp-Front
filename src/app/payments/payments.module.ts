import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdviceComponent} from './advice/advice.component';
import {NgbAlertModule, NgbDatepickerModule, NgbDropdownModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {ChargesComponent} from './charges-table/charges.component';
import {BillComponent} from './bill/bill.component';
import {PaymentValidatorService} from "./services/payment-validator.service";
import {DatepickerModule} from "ngx-bootstrap/datepicker";
import { CalendarComponent } from './calendar/calendar.component';
import { DeleteComponent } from './delete/delete.component';
import {DateFormatterService} from "./services/date-formatter.service";

const routes: Routes = [
    {path: 'master', component: BillComponent}
]

@NgModule({
    declarations: [
        AdviceComponent,
        ChargesComponent,
        BillComponent,
        CalendarComponent,
        DeleteComponent,
    ],
    exports: [
        RouterModule,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        NgbAlertModule,
        NgbDropdownModule,
        NgbDatepickerModule,
        NgbPaginationModule,
        DatepickerModule,
    ],
    providers: [PaymentValidatorService,DateFormatterService],
})
export class PaymentsModule {
}
