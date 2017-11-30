import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerData = {};

  constructor(private authService: AuthService, private router: Router) {}

  post() {
    console.log(this.registerData);
    this.authService.sendUserRegistration(this.registerData);
    // this.router.navigate(['/users']);
  }
}
