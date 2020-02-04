import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticateService } from './authenticate.service';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthenticateService, public router: Router) {}
  
  // If the user has not been handled by AuthenticateService, return to login
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}