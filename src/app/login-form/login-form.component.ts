import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userField:String = "";

  constructor() { }

  ngOnInit(): void {
  }


  isEmpty: boolean = true;
  checkInputStatus(){
    
    
    
  }
}
/*
<div class="LoginFormInput">              
<input class="username textInput" name="username" placeholder="Username" [(ngModel)]="username"          
      (blur)="checkUser()" (keyup)="checkFields()" />            
  <p class="alert" [hidden]="!usernameError">*Username is required</p>        
</div>
*/

