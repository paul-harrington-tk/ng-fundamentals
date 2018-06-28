import { Injectable } from '@angular/core';
import { EventsService } from './shared/events.service';
import { Resolve } from '@angular/router';

export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventsService) {

    }

    resolve() {
        return this.eventService.getEvents().map(events => events);
    }
}
