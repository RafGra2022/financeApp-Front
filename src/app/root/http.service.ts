import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../home/interfaces/User";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    // private registerUrl = 'http://localhost:8080/register';
    private url = 'http://localhost:8080/';

    postData(data: any, endpoint: string) {
        return this.http.post(this.url + endpoint, data).toPromise();
    }


    getData(parameters: HttpParams, endPoint: string) {
        return this.http.get<User>(this.url + endPoint, {params: parameters}).toPromise();
    }
}
