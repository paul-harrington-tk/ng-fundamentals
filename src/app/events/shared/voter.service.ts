import { ISession } from '../event.model';

export class VoterService {
    addVoter(session: ISession, userName: string) {
        session.voters.push(userName);
    }

    deleteVoter(session: ISession, userName: string) {
        session.voters = session.voters.filter(voter => voter !== userName);
    }

    userHasVoted(session: ISession, userName: string): boolean {
        return session.voters.some(voter => voter === userName);
    }
}
