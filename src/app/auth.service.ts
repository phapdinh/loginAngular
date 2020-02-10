import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data {
  success: boolean;
  secret: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loggedInStatus = false;

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username: string, password: string) {
    return this.http.post<Data>('/api/auth', {
      username,
      password
    });
  }
}
