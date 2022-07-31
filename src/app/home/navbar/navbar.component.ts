import {Component} from '@angular/core';
import {LoggerService} from "../../root/logger.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    constructor(public logger: LoggerService, private router: Router) {
    }

    logout() {
        this.logger.isUserLogged = false;
        this.logger.userLogged = "";
        this.router.navigate([""]);
    }
}
