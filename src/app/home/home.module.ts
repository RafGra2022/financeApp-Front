import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AlertsComponent} from "./alerts/alerts.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {NgLetModule} from "ng-let";
import {RegisterValidatorService} from "./services/register-validator.service";
import { ResponsesComponent } from './responses/responses.component';


const routes : Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
];

@NgModule({
    declarations: [
        AlertsComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        ResponsesComponent,
    ],
    exports: [
        NavbarComponent,
        RouterModule
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        NgLetModule,
        RouterModule.forRoot(routes),
    ],
    providers: [RegisterValidatorService],
})
export class HomeModule {

}
