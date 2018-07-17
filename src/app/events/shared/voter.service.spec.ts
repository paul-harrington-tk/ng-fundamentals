import { VoterService } from './voter.service';
import { ISession } from '..';
import { of } from 'rxjs/observable/of';

describe('VoterService', () => {
    let voterService: VoterService,
    mockHttp;
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'delete']);

        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            const session = {id: 6, voters: ['joe', 'john']};
            mockHttp.delete.and.returnValue(of(false));
            voterService.deleteVoter(2, <ISession>session, 'john');
            expect(session.voters.length)
                .toBe(1);
            expect(session.voters[0]).toBe('joe');
        });

        it('should call http delete with the right URL', () => {
            const session = {id: 6, voters: ['joe', 'john']};
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(2, <ISession>session, 'john');
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/2/sessions/6/voters/john');
        });
    });

    describe('addVoter', () => {
        it('should add the voter to the list of voters', () => {
            const session = {id: 6, voters: ['joe']};
            mockHttp.post.and.returnValue(of(false));
            voterService.addVoter(2, <ISession>session, 'john');
            expect(session.voters.length)
                .toBe(2);
            expect(session.voters[1]).toBe('john');
        });

        it('should call http post with the right URL', () => {
            const session = {id: 6, voters: ['joe']};
            mockHttp.post.and.returnValue(of(false));
            voterService.addVoter(2, <ISession>session, 'john');
            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/2/sessions/6/voters/john', {}, jasmine.any(Object));
        });
    });
});
