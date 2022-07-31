import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent  {

  constructor() { }

  @Input()
  badUser:boolean =false;
  @Input()
  userExist:boolean =false;

}
