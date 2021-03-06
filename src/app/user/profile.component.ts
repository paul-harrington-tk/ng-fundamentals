import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

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
    constructor(private authService: AuthService,
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr) {

    }
    ngOnInit() {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/user/login']);
            return;
        }
        const firstName = new FormControl(this.authService.currentUser.name, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        const lastName = new FormControl(this.authService.currentUser.surname, [Validators.required, Validators.pattern('[a-zA-Z].*')]);

        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        });
    }

    validateFirstName(): boolean {
        return this.profileForm.controls.firstName.valid || this. profileForm.controls.firstName.untouched;
    }

    validateLastName(): boolean {
       return this.profileForm.controls.lastName.valid || this.profileForm.controls.lastName.untouched;
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.toastr.success('Profile Updated');
        }
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    logout() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/user/login']);
        });
    }
}
