import { Component } from '@angular/core';

@Component({
  selector: 'app-events-root',
  template: `
  <app-nav-bar></app-nav-bar>
  <app-events-list></app-events-list>
  `
})
export class EventsAppComponent {
  title = 'app';
}
