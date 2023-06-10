import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signup(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/signup', user);
  }
  signin(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/signin', user);
  }
  isAuthenticated() {
    return JSON.parse(localStorage.getItem('userInfo') || '{}');
    // '{accessToken, user}'
    // '{}'
  }
}
