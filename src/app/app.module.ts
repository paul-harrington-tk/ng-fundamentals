import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent, EventThumbnailComponent, CreateEventComponent } from './events';
import { EventDetailsComponent, SessionListComponent, CreateSessionComponent, EventRouteActivator } from './events/event-details';
import { NavBarComponent } from './nav/nav.component';
import { Error404Component } from './errors/404.component';
import { CollapsableWellComponent, Toastr, TOASTR_TOKEN, JQ_TOKEN } from './common';
import { DurationPipe, EventsService } from './events/shared';
import { AuthService } from './user';


let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    SessionListComponent,
    NavBarComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    CollapsableWellComponent,
    DurationPipe
  ],
  providers: [
    EventsService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    EventRouteActivator,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty) {
    return window.confirm('You have not saved your event, are you sure you wish to cancel?');
  }

  return true;
}
