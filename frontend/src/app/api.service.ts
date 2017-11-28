import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  messages = [];
  users = [];
  user: any;

  constructor(private http: Http) { }

  getMessages() {
    this.http.get('http://localhost:3000/posts')
      .subscribe(res => {
        console.log(res);
        this.messages = res.json();
      });
  }

  getUsers() {
    this.http.get('http://localhost:3000/users')
      .subscribe(res => {
        console.log(res);
        this.users = res.json();
      });
  }

  getProfile(id) {
    return this.http.get('http://localhost:3000/profile/' + id)
  }

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
