import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthenticateService } from './services/authenticate.service';
import { AuthGuardService } from './services/auth-guard.service';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() { 
        return localStorage.getItem('token');
        }
      }
    })
  ],
  providers: [
    JwtHelperService,
    AuthenticateService,
    AuthGuardService,
    DataService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
