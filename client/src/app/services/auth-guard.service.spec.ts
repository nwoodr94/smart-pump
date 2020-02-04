import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateService } from './authenticate.service';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

describe('AuthGuardService', () => {
  const spyService = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule, JwtModule ],
    providers: [ AuthenticateService,
      { provide: HttpClient, useValue: spyService },
      { provide: JwtHelperService } ]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
