import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './event.model';

@Component({
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
    isDirty = true;
    newEvent: IEvent;
    constructor(private router: Router) {

    }
    saveEvent(formValues) {
        console.log(formValues);
    }
    cancel() {
        this.router.navigate(['/events']);
    }
}
