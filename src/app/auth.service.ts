import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private loggedInStatus = false;

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username: string, password: string) {
    return this.http.post<Data>('http://localhost:7000/api/auth', {
      username,
      password
    });
  }
}
