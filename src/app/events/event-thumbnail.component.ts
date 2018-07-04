import { Component, Input, Output } from '@angular/core';
import { IEvent } from './event.model';

@Component( {
    selector: 'app-event-thumbnail',
    template: `<div class="well hoverwell thumbnail" [routerLink]="['/events', event.id]">
    <h2>{{event.name | uppercase}}</h2>
    <div>Date: {{event?.date | date}}</div>
    <div [ngStyle]="getStartTimeStyle()"  [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{event?.price | currency:'USD' }}</div>
    <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl }}
    </div>
</div>`,
    styles: [`
    .green { color: #003300 !important }
    .bold { font-weight: bold; }
    .pad-left { margin-left: 10px;}
    .well div {color: #bbb;}
    .thumbnail { min-height: 230px; } ` ]
})

export class EventThumbnailComponent {
    @Input() event: any;
    getStartTimeStyle(): any {
        if (this.event && this.event.time === '8:00 am') {
            return {
                'color': '#003300',
                'font-weight': 'bold'
            };
        }
        return {};
    }
}
