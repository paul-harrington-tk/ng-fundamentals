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
            name: undefined,
            date: undefined,
            time: undefined,
            price: undefined,
            location: {
                address: undefined,
                city: undefined,
                country: undefined
            },
            onlineUrl: undefined,
            imageUrl: undefined,
            sessions: []
        };
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        .subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
