import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { User } from '../user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService,
    private router: Router) { }

  ngOnInit() {
  }

  user = new User()

  login(email, password) {

    if (email == ""
      || password == "") {
      this.user.validated = false;
      return;
    }
    else {
      this.user.email = email;
      this.user.password = password;


      this.authenticateService.post(this.user).subscribe(
        (user: User) => {
          console.log(user._id);
          this.authenticateService.isAuthenticated();
          this.router.navigate(['/user'], { state: {user} })
        },
        (err: any) => {
          console.log(err);
        }
      )
    }
  }

}
