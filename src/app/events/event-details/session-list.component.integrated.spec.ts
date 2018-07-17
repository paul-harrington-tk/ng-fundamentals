import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {DebugElement } from '@angular/core';
import {SessionListComponent } from './session-list.component';
import {VoterService} from '../shared/voter.service';
import { AuthService } from '../../user/auth.service';
import { ISession} from '../event.model';
import {By} from '@angular/platform-browser';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared';
import { CollapsableWellComponent } from '../../common';
import { of } from 'rxjs/observable/of';



describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

    beforeEach(async(() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {
                userName: 'johnpapa',
                name: 'John',
                surname: 'Papas'
            }
        };
        const mockVoterService = {
            addVoter: () => true,
            deleteVoter: () => true,
            userHasVoted: () => true
        };
        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsableWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService},
                { provide: VoterService, useValue: mockVoterService}
            ],
            schemas: []
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('Initial Display', () => {
        it('should have the correct session title', () => {
            component.sessions = [
                {
                    id: 1,
                    abstract: 'test intermediate session',
                    duration: 1,
                    level: 'Intermediate',
                    name: 'Intermediate Session',
                    presenter: 'paulh',
                    voters: ['neos', 'esaij', 'paulh', 'eddieh']
                }];

            component.eventId = 3;
            component.filterBy = 'all';
            component.sortBy = 'name';

            component.ngOnChanges();
            fixture.detectChanges();
            expect(component.visibleSessions.length).toBe(1);
            expect(element.querySelector('[well-title]').textContent).toContain('Intermediate Session');
        });
    });
});
