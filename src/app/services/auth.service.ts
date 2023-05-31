import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {

  }

  signup(user: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signup`, user);
  }
}
