import { TestBed } from '@angular/core/testing';
import { AuthenticateService } from './authenticate.service';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

describe('AuthenticateService', () => {

  const spyService = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: spyService },
      { provide: JwtHelperService, useValue: JWT_OPTIONS}
    ]
  }));

  it('should be created', () => {
    const service: AuthenticateService = TestBed.get(AuthenticateService);
    expect(service).toBeTruthy();
  });
});
