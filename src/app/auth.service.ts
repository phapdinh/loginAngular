import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data {
  success: boolean
  secret: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    return this.http.post<Data>('/api/auth', {
      username,
      password
    });
  }
}
