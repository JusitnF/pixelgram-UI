import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { AuthServiceService } from './auth-service.service';
import { AuthResponse } from 'src/models/auth-response';
import { AuthReq } from 'src/models/auth-req';


describe('AuthServiceService', () => {
  let service: AuthServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[HttpClientTestingModule]
    });
    service = TestBed.inject(AuthServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('userLogin returns auth response', () => {
    let req: TestRequest;
    let authResponse: AuthResponse = {
      access_token: "test access token",
      expires_in: 1,
      refresh_expires_in: 1,
      refresh_token: "refresh token",
      token_type: "test token",
      session_state: "test session state",
      scope: "test scope"
    }

    let authReq: AuthReq = {
      username: "test name",
      password: "test password"
    }

    service.userLogin(authReq).subscribe((result) => {
      expect(result.expires_in).toBe(1)
    })

    req = httpTestingController.expectOne(`http://34.72.139.183/auth/token`);
    req.flush(authResponse)
  })
});
