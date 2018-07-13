import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    constructor(private route: ActivatedRoute) {
        this.events = this.route.snapshot.data['events'];
    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe((events) => this.events = events);
    }
}
