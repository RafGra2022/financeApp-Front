import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HomeModule} from "./home/home.module";
import {HttpClientModule} from '@angular/common/http'
import {NgLetModule} from "ng-let";
import {CommonModule} from "@angular/common";
import {PaymentsModule} from "./payments/payments.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HomeModule,
        RouterModule,
        NgLetModule,
        CommonModule,
        PaymentsModule,


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
