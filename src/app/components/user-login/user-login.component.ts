import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj:any = {
    userName: '',
    email: '',
    password: ''
  }
  loginObj:any = {
    userName: '',
    password: ''
  }

  onLogin(): void {
    console.log(this.loginObj.userName)
    console.log(this.loginObj.password)
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}