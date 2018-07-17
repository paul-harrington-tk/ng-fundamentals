import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        mockAuthService = jasmine.createSpyObj('mockAuthService', ['']);
        mockVoterService = jasmine.createSpyObj('mockVoterService', ['']);
        component = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = [
            {
                id: 1,
                abstract: 'test intermediate session',
                duration: 1,
                level: 'Intermediate',
                name: 'Intermediate Session',
                presenter: 'paulh',
                voters: ['neos', 'esaij', 'paulh', 'eddieh']
            },
            {
                id: 2,
                abstract: 'test advanced session',
                duration: 1,
                level: 'Advanced',
                name: 'Advanced Session',
                presenter: 'paulh',
                voters: ['neos', 'esaij', 'paulh', 'eddieh', 'hanness']
            },
            {
                id: 3,
                abstract: 'test beginner session',
                duration: 1,
                level: 'Beginner',
                name: 'Beginner Session',
                presenter: 'paulh',
                voters: ['neos', 'esaij']
            }];
            component.sortBy = 'name';
            component.filterBy = 'advanced';
            component.ngOnChanges();
            expect(component.visibleSessions.length).toBe(1);
            expect(component.visibleSessions[0].name).toBe('Advanced Session');


            component.sortBy = 'name';
            component.filterBy = 'intermediate';
            component.ngOnChanges();
            expect(component.visibleSessions.length).toBe(1);
            expect(component.visibleSessions[0].name).toBe('Intermediate Session');
        });

        it('should sort sessions correctly', () => {
            component.sessions = [
                {
                    id: 1,
                    abstract: 'test intermediate session',
                    duration: 1,
                    level: 'Advanced',
                    name: 'Intermediate Session',
                    presenter: 'paulh',
                    voters: ['neos', 'esaij', 'paulh', 'eddieh']
                },
                {
                    id: 2,
                    abstract: 'test advanced session',
                    duration: 1,
                    level: 'Advanced',
                    name: 'Advanced Session',
                    presenter: 'paulh',
                    voters: ['neos', 'esaij', 'paulh', 'eddieh', 'hanness']
                },
                {
                    id: 3,
                    abstract: 'test beginner session',
                    duration: 1,
                    level: 'Advanced',
                    name: 'Beginner Session',
                    presenter: 'paulh',
                    voters: ['neos', 'esaij']
                }];
            component.sortBy = 'votes';
            component.filterBy = 'all';
            component.ngOnChanges();
            expect(component.visibleSessions[0].voters.length).toBeGreaterThan(component.visibleSessions[1].voters.length);
        });
    });
});
