import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
     .container { padding-left: 20px; padding-right: 20px; }
     .event-image: { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {
    private event: any;
    constructor(private eventService: EventsService) {
    }

    ngOnInit() {
        this.event = this.eventService.getEvent(1);
    }
}
