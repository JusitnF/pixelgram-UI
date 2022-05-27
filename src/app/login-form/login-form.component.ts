import { Component, HostListener, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userControl = new FormControl('');
  passControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  usernameEmpty(): boolean {
    try{
      let user: String = this.userControl.value
      return user.trim() == ''
    }
    catch {
      return true;
    }
  }

  passwordEmpty(): boolean {
    try{
      let pass: String = this.passControl.value
      return pass.trim() == ''
    }
    catch {
      return true;
    }
  }

}
