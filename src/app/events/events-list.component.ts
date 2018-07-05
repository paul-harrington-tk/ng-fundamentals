import {Component, OnInit } from '@angular/core';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { IEvent } from './event.model';
import { EventsService } from './shared/events.service';

@Component({
    selector: 'app-events-list',
    template: `
<div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
        <div class="col-md-5" *ngFor="let event of events" >
            <app-event-thumbnail #thumbnail [event]="event"></app-event-thumbnail>
        </div>
    </div>
</div>`
})
export class EventsListComponent implements OnInit {
    events: Array<any>;

    constructor(private eventService: EventsService) {

    }

    ngOnInit() {
        this.eventService.getEvents().subscribe((events) => this.events = events);
    }
}
