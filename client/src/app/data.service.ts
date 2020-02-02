import { Injectable } from '@angular/core';
import { User } from './user-model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService{


  constructor(private http: HttpClient) {}

  // User handling between login and profile
  private user: User; 

  setData(user: User){
    this.user = user;
  }

  getData():User {
    return this.user;
  }


  // Application HTTP Methods
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private URI = 'http://localhost:8000/';

  public post(user: User): Observable<User> {
    return this.http.post<User>(this.URI, user, this.httpOptions);
  }

  public patch(user: User): Observable<any> {
    return this.http.patch(this.URI, user);
  }
}