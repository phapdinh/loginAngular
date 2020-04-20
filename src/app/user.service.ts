import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<Data>('http://localhost:7000/api/data');
  }
}
