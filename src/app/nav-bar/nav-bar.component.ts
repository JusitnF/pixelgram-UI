import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router) { }
  
  ngOnInit(): void {
  }

  Login: boolean = true;
  isVisible: boolean = false;

  goTo(url: any) {
    window.location.href = url;
  }

  showLoginButton() {
    this.Login = !this.Login;
    this.isVisible = !this.isVisible;
  }
}
