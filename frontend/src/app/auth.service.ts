import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  users = [];
  user: any;

  constructor(private http: Http) { }

  sendUserRegistration(registerData) {
    this.http.post('http://localhost:3000/register', registerData)
      .subscribe(res => {
        console.log('sendUserRegistration() response: ' + res);
        console.log(res);
      });
  }

  loginUser(loginData) {
    this.http.post('http://localhost:3000/login', loginData)
      .subscribe(res => {
        console.log('loginUser() response: ' + res);
        console.log(res);
      });
  }

}
