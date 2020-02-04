import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

describe('DataService', () => {
  const spyService = jasmine.createSpyObj('HttpClient', ['get', 'post', 'patch']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: spyService },
      JwtHelperService ]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
