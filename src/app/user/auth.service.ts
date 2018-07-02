import { IUser } from "./user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    updateCurrentUser(name: string, surname: string): any {
        this.currentUser.name = name;
        this.currentUser.surname = surname;
    }
    currentUser: IUser;

    login(username: string, password: string) {
        this.currentUser = {
            userName: 'papa',
            name: 'John',
            surname: 'Harris'
        }
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}