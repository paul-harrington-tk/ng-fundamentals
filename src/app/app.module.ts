import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent, EventThumbnailComponent, CreateEventComponent, EventListResolver } from './events';
import { EventDetailsComponent,
  SessionListComponent, CreateSessionComponent, EventRouteActivator, UpvoteComponent } from './events/event-details';
import { NavBarComponent } from './nav/nav.component';
import { Error404Component } from './errors/404.component';
import { CollapsableWellComponent, Toastr, TOASTR_TOKEN, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common';
import { DurationPipe, EventsService, VoterService } from './events/shared';
import { AuthService } from './user';
import { LocationValidator } from './events/location-validator.directive';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidator,
    UpvoteComponent
  ],
  providers: [
    EventsService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
    HttpClient,
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
