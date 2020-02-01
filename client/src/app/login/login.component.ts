import { Component, OnInit } from '@angular/core';
import { User } from '../user-model';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataService) {}

  ngOnInit() {
  }

  user: User = new User()

  login(email, password) {

    if (email == ""
      || password == "") {
      return;
    }
    else {
      this.user.email = email;
      this.user.password = password;


      this.dataService.post(this.user).subscribe(
        (user: User) => {
          console.log("Authenticated");
          this.dataService.setData(user);
          localStorage.setItem('token', user.token);
          this.router.navigate(['/user', user._id]);
        },
        (err: any) => {
          console.log(err);
        }
      )
    }
  }

}
