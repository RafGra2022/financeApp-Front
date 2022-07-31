import {Component, EventEmitter, Output} from '@angular/core';
import {LoggerService} from "../../root/logger.service";

@Component({
    selector: 'app-advice',
    templateUrl: './advice.component.html',
    styleUrls: ['./advice.component.css']
})
export class AdviceComponent {

    constructor(public logger:LoggerService) {
    }
    @Output()
    isFormVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

    add() {
        this.isFormVisible.emit(true);
    }
}
