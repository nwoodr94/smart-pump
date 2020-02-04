import { Component, OnInit, Input } from '@angular/core';
import { User } from './user-model';
import { DataService } from '../services/data.service'
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../app.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private auth: AuthenticateService) {}

  user: User = this.dataService.getData();

  ngOnInit(){
    
  }

  switch: boolean = false;

  // UX toggle on "Edit"
  toggle() {
    this.switch = !this.switch;
    return this.switch;
  }

  // Logout
  logout() {
    this.router.navigate(['/login']);
  }

  // Edit user credentials
  edit(newEmail, newPassword) {

    // Form Validation
    if (newEmail == ""
        || newPassword == "") {
        return;
    } else {
      
      // Patch the user on Node
      this.dataService.patch(this.user).subscribe(
        (user: User) => {
          user = this.dataService.getData();
          this.toggle()
          
        },
        (err: any) => {
          console.log(err);
        }
      )
    }
  }
}