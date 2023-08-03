import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {
  signupObj:any = {
    userName: '',
    email: '',
    password: ''
  }

  constructor(private router: Router) {}

  onSignUp(): void {
    sessionStorage.setItem('email', this.signupObj.email);
    sessionStorage.setItem('username', this.signupObj.username);
    sessionStorage.setItem('password', this.signupObj.password);

    this.router.navigate(['/feed']);
  }
}
