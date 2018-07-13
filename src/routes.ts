import { Routes } from '@angular/router';
import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { Error404Component } from './app/errors/404.component';
import { EventRouteActivator } from './app/events/event-details/events-route-activator.component';
import { CreateSessionComponent } from './app/events/event-details/create-session.component';
import { EventListResolver } from './app/events';


export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [  EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];

