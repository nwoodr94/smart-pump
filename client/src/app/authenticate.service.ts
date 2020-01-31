import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user-model';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return true or false
    return !this.jwtHelper.isTokenExpired(token);
  }


  private postURL = 'http://localhost:8000/';s

  post(contact: User): Observable<User> {
    return this.http.post<User>(this.postURL, contact, this.httpOptions);
  }

}