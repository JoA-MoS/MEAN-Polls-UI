import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _loggedIn: boolean;
  private _userName: string;
  constructor() {
    this._loggedIn = false;
    this._userName = '';
  }

  get loggedIn(): boolean {
    this._loggedIn = JSON.parse(localStorage.getItem('loggedIn')) as boolean;
    return this._loggedIn;
  }

  get userName(): string {
    return this._userName || JSON.parse(localStorage.getItem('userFirstName'));
  }

  logIn(userFirstName: string) {
    this._loggedIn = true;
    this._userName = userFirstName;
    localStorage.setItem('loggedIn', JSON.stringify(this._loggedIn));
    localStorage.setItem('userFirstName', JSON.stringify(this._userName));

  }

  logOut() {
    localStorage.clear();
    this._loggedIn = false;
    this._userName = '';
    // localStorage.setItem('loggedIn', JSON.stringify(this._loggedIn));
    // localStorage.setItem('userFirstName', JSON.stringify(this._userFirstName));

  }

}
