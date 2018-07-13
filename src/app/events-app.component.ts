import { Component, OnInit } from '@angular/core';
import { AuthService } from './user';

@Component({
  selector: 'app-events-root',
  template: `
  <app-nav-bar></app-nav-bar>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {
  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
