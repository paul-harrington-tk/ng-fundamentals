import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsAppComponent } from './events-app.component';
import { EventsListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav.component';
import { EventsService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [
    EventsService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
