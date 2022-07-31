import {FormControl} from '@angular/forms';
import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {RegisterValidatorService} from "../services/register-validator.service";
import {takeUntil} from "rxjs/operators";
import {HttpService} from "../../root/http.service";
import {User} from "../interfaces/User";
import {InputData} from "../interfaces/inputData";
import {HttpStatusCode} from "@angular/common/http";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit, OnDestroy {

    constructor(private validator: RegisterValidatorService, private http: HttpService) {
    }

    user = new FormControl('');
    password = new FormControl('');
    passwordConfirm = new FormControl('');

    userObservable: Observable<InputData> = new Observable();
    passwordObservable: Observable<InputData> = new Observable();
    isUser: boolean = false;
    isPassword: boolean = false;
    userExist: boolean = false;

    destroy$ = new Subject();

    ngAfterViewInit(): void {
        let user: string = "";
        let password: string = "";
        let passwordConfirm: string = "";

        this.user.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            user = data;
            this.userObservable = this.validator.userObs(user);
            this.isUser = this.validator.isValid(user);
        });

        this.password.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(data => {
            password = data;
            this.passwordObservable = this.validator.passwordObs(password);
            this.isPassword = this.validator.isEqual(password, passwordConfirm);
        });

        this.passwordConfirm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(data => {
            passwordConfirm = data;
            this.isPassword = this.validator.isEqual(password, passwordConfirm);
        });
    }

    async register() {
        let user: User;
        console.log("send");
        user = {
            user: this.user.value,
            password: this.password.value,
        }
        try {
            await this.http.postData(user,"register");
            this.userExist=false;
        } catch (error) {
            if (HttpStatusCode.Conflict) {
                this.userExist=true;
            } else {
                console.log("błąd po stronie serwera")
            }
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
