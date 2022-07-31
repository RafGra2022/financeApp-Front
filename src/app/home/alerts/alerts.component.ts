import { Observable } from 'rxjs';
import { Component, Input} from '@angular/core';
import {InputData} from "../interfaces/inputData";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {

  constructor() { }

  @Input()
  userObservable: Observable<InputData> = new Observable();
  @Input()
  passwordObservable: Observable<InputData> = new Observable();
  @Input()
  isPassword: boolean = false;

}
