export class VisibilityProperties{

    constructor() {
    }

    private _isUserLogged=false;
    private _isTableEmpty = true;
    private _isAdviceVisible= true;
    private _isFormVisible: boolean = false;
    private _isTableVisible: boolean = false;

    private _firstCalendarVisible: boolean = false;
    private _secondCalendarVisible: boolean = false;
    private _thirdCalendarVisible: boolean = false;


    get isAdviceVisible(): boolean {
        return this._isAdviceVisible;
    }

    set isAdviceVisible(value: boolean) {
        this._isAdviceVisible = value;
    }

    get isFormVisible(): boolean {
        return this._isFormVisible;
    }

    set isFormVisible(value: boolean) {
        this._isFormVisible = value;
    }

    get isTableVisible(): boolean {
        return this._isTableVisible;
    }

    set isTableVisible(value: boolean) {
        this._isTableVisible = value;
    }

    get firstCalendarVisible(): boolean {
        return this._firstCalendarVisible;
    }

    set firstCalendarVisible(value: boolean) {
        this._firstCalendarVisible = value;
    }

    get secondCalendarVisible(): boolean {
        return this._secondCalendarVisible;
    }

    set secondCalendarVisible(value: boolean) {
        this._secondCalendarVisible = value;
    }

    get thirdCalendarVisible(): boolean {
        return this._thirdCalendarVisible;
    }

    set thirdCalendarVisible(value: boolean) {
        this._thirdCalendarVisible = value;
    }

    get isUserLogged(): boolean {
        return this._isUserLogged;
    }

    set isUserLogged(value: boolean) {
        this._isUserLogged = value;
    }

    get isTableEmpty(): boolean {
        return this._isTableEmpty;
    }

    set isTableEmpty(value: boolean) {
        this._isTableEmpty = value;
    }
}