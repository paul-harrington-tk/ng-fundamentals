import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ISession } from '../event.model';
import { AuthService } from '../../user/auth.service';
import { VoterService } from '../shared/voter.service';

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];
    constructor (private auth: AuthService, private voterService: VoterService) {

    }

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

    userHasVoted(session): boolean {
        return  this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }

    toggleVote(session): void {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.auth.currentUser.userName);
        }

        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotes);
        }

        return;
    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1;
    } else if (s1.name === s2.name) {
        return 0;
    } else {
        return -1;
    }
}

function sortByVotes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
