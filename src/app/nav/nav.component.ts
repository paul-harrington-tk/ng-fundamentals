import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { IUser } from '../user/user.model';
import { EventsService } from '../events/shared/events.service';
import { ISession } from '../events/event.model';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm { display:none } }
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent {
    foundSessions: ISession[];
    constructor(private authService: AuthService, private eventService: EventsService) {
    }

    searchTerm: string = "";

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm)
            .subscribe(sessions => {
                this.foundSessions = sessions
                console.log(this.foundSessions);
            });
    }
}
