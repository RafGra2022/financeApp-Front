import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {InputData} from "../interfaces/inputData";

@Injectable()
export class RegisterValidatorService {

    constructor() {
    }

    public checkContent(pass1: String, pass2: String): boolean {
        return pass1 === pass2;
    }

    public checkLength(text: String): boolean {
        return text.length > 4;
    }

    public checkAlphaNum(text: String): boolean {
        let hasLetters = /[A-Za-z]/;
        let hasNumbers = /\d/;
        return hasNumbers.test(text.toString()) && hasLetters.test(text.toString());
    }

    public isValid(data: any) {
        return this.checkLength(data) && this.checkAlphaNum(data);
    }

    public isEqual(data: any, data1: any) {
        return this.checkLength(data) && this.checkAlphaNum(data) && this.checkContent(data, data1);
    }

    public userObs(data: any) {
        let inputData: InputData;
        inputData = {
            userLength: this.checkLength(data),
            userAlphaNum: this.checkAlphaNum(data),
        };
        return new BehaviorSubject(inputData).asObservable();
    }

    public passwordObs(data: any) {
        let inputData: InputData;
        inputData = {
            passwordLength: this.checkLength(data),
            passwordAlphaNum: this.checkAlphaNum(data),
        };
        return new BehaviorSubject(inputData).asObservable();
    }
}