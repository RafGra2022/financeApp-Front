import {RegisterValidatorService} from '../services/register-validator.service';
import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from "rxjs/operators";
import {HttpService} from "../../root/http.service";
import {HttpParams} from "@angular/common/http";
import {InputData} from "../interfaces/inputData";
import {User} from "../interfaces/User";
import {LoggerService} from "../../root/logger.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit, OnDestroy {

    constructor(private validator: RegisterValidatorService, private http: HttpService, private logger:LoggerService, private router: Router) {

    }

    user = new FormControl('');
    password = new FormControl('');

    userObservable: Observable<InputData> = new Observable();
    passwordObservable: Observable<InputData> = new Observable();
    badUser : boolean = false;
    isUser: boolean = false;
    isPassword: boolean = false;
    isPasswordEqual:boolean=true;

    destroy$ = new Subject();

    ngAfterViewInit(): void {
        let user: any;
        let password: any;

        this.user.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            user = data;
            this.userObservable = this.validator.userObs(user);
            this.isUser = this.validator.isValid(user);
        });
        this.password.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(data => {
            password = data;
            this.passwordObservable = this.validator.passwordObs(password);
            this.isPassword = this.validator.isValid(password);
        });
    };

    async login() {
        let user: User;
        let params = new HttpParams().set("user", this.user.value).set("password", this.password.value);
        try {
            user = await this.http.getData(params, "login");
            this.logger.isUserLogged=true;
            this.logger.userLogged= user.user;
            this.badUser=false;
            this.router.navigate([""]);
        } catch (error) {
            this.badUser=true;
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }



}
