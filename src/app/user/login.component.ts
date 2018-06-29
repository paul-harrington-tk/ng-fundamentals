import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { color: #E05C65; float: right; padding-left: 10px; }
    `]
})
export class LoginComponent {
    mouseOverLogin: boolean;
    userName: string;
    password: string;
    constructor (private authService: AuthService, private router: Router) {

    }
    login(formValues) {
        this.authService.login(formValues.userName, formValues.password);
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
    
}