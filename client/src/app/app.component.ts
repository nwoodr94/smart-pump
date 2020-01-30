import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';



submit(_username, _password) {

  if (_username && _password) {

    let user = db.get('users')
    .find({ email : _username, password: _password })
    .value();

    return user;
  }
}
