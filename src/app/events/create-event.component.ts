import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './event.model';
import { EventsService } from './shared/events.service';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
        em { float:right; color: #E05C65; padding-left: 10px;}
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateEventComponent implements OnInit {
    isDirty = true;
    newEvent: IEvent;
    constructor(private router: Router, private eventService: EventsService) {

    }
    ngOnInit() {
        this.newEvent = {
            name: 'Ng Spectacle',
            date: '8/8/2019',
            time: '10:00 am',
            price: 899.99,
            location: {
                address: '456 Study Str',
                city: 'New JS City',
                country: 'United States of Angular'
            },
            onlineUrl: '',
            imageUrl: '/assets/images/angularconnect-shield.png',
            sessions: []
        }
    }
    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
    cancel() {
        this.router.navigate(['/events']);
    }
}
