import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { EventsAppComponent } from './events-app.component';
import { EventsListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav.component';
import { EventsService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/events-route-activator.component';
import { SessionListComponent } from './events/event-details/session-list.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    SessionListComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivator,
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
