import { IUser } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {

    currentUser: IUser;
    updateCurrentUser(name: string, surname: string): any {
        this.currentUser.name = name;
        this.currentUser.surname = surname;
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser);
    }

    constructor( private http: HttpClient) {

    }

    login(username: string, password: string) {
        const loginInfo = {
            username: username,
            password: password
        };
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = this.mapUser(data['user']);
                return true;
            }))
            .pipe(catchError(err => {
                return of(false);
            }));
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }
    checkAuthenticationStatus(): any {
        this.http.get('/api/currentIdentity')
            .subscribe(data => {
                if (data instanceof Object) {
                    this.currentUser = this.mapUser(data);
                }
            });
    }

    logout(): any {
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        this.currentUser = undefined;
        return this.http.post('/api/logout', {}, options);
    }


    private mapUser(data): IUser {
        return {
            id: data['id'],
            name: data['firstName'],
            surname: data['lastName'],
            userName: data['userName']
        };
    }
}
