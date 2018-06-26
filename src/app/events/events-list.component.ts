import {Component, OnInit } from '@angular/core';
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

    constructor(private eventsService: EventsService) {

    }

    ngOnInit() {
      this.events = this.eventsService.getEvents();
    }
}
