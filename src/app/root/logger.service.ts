import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    constructor() {
    }

    private _userLogged: string = "";
    private _isUserLogged: boolean = false;


    get userLogged(): string {
        return this._userLogged;
    }

    set userLogged(value: string) {
        this._userLogged = value;
    }

    get isUserLogged(): boolean {
        return this._isUserLogged;
    }

    set isUserLogged(value: boolean) {
        this._isUserLogged = value;
    }
}
