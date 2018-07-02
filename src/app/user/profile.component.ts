import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html',
    styles: [`
        em { float:right; color: #E05C65; padding-left: 10px;}
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    constructor(private authService: AuthService, private router: Router) {

    }
    ngOnInit() {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/user/login']);
            return;
        }
        let firstName = new FormControl(this.authService.currentUser.name, Validators.required);
        let lastName = new FormControl(this.authService.currentUser.surname, Validators.required);

        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    validateFirstName(): boolean {
        return this.profileForm.controls.firstName.valid && this. profileForm.controls.firstName.untouched;
    }
    validateLastName(): boolean {
       return this.profileForm.controls.lastName.valid && this.profileForm.controls.lastName.untouched;
    }
    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['/events']);
        }
    }
    cancel() {
        this.router.navigate(['/events']);
    }
}
