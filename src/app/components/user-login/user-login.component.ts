import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];
  
  loginObj:any = {
    email: '',
    password: ''
  }

  constructor (private router: Router) {}

  onLogin(): void {
    if ((sessionStorage.getItem("email") == this.loginObj.email) 
    && (sessionStorage.getItem("password") == this.loginObj.password)) {
      this.router.navigate(['/feed']);
    }
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
