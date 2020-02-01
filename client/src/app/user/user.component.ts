import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-model';
import { DataService } from '../data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../app.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dataService: DataService) {}

  user: User = this.dataService.getData();

  ngOnInit(){}

  switch: boolean = false;

  toggle() {
    console.log(this.switch)
    this.switch = !this.switch;
    return this.switch;
  }

  edit(newEmail, newPassword) {

    if (newEmail == ""
        || newPassword == "") {
        return;
    } else {
      this.user.newEmail = newEmail;
      this.user.newPassword = newPassword;

      this.dataService.patch(this.user).subscribe(
        (user: User) => {
          this.toggle()
          this.dataService.getData();
        },
        (err: any) => {
          console.log(err);
        }
      )
    }
  }
}