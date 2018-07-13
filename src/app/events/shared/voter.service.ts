import { ISession } from '../event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class VoterService {
    constructor (private http: HttpClient) {

    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.post(url, {}, options)
            .pipe(catchError(this.handleError<any>('addVoter')));
    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url)
            .pipe(catchError(this.handleError<any>('deleteVoter')));
    }

    userHasVoted(session: ISession, userName: string): boolean {
        return session.voters.some(voter => voter === userName);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          if (error.constructor.name === 'Observable') {
            error.subscribe((data) => {
                console.log(operation + ' failed');
                console.log(data);
            });
          } else {
            console.error(error);
          }

          return of(result as T);
        };
      }
}
