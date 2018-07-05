import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ISession } from '../event.model';

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'votes' ? 
            this.visibleSessions.sort(sortByVotes) : 
            this.visibleSessions.sort(sortByNameAsc);
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions;
        } else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLowerCase() === filter);
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortByVotes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
