import { Component, OnInit } from '@angular/core';
import { User } from '../user/user-model';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataService) {}

  user: User = new User();

  ngOnInit() {
  }

  // Login the user
  login(email, password) {

    // Simple Form Validation
    if (email === ''
      || password === '') {
      return;
    } else {
      this.user.email = email;
      this.user.password = password;

      // Post the credentials to Node, and navigate to profile with user object in context
      this.dataService.post(this.user).subscribe(
        (user: User) => {
          this.dataService.setData(user);
          localStorage.setItem('token', user.token);
          this.router.navigate(['/user', user._id]);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

}
