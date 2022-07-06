import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('login')
  login!: ElementRef;
  Login: boolean = true;
  isVisible: boolean = false;


  constructor(public router: Router, private renderer: Renderer2) { 
    this.renderer.listen('window', 'click', (event:Event) => {
      if (event.target !== this.login.nativeElement) {
        this.isVisible = false;
      }
    })
  }
  
  ngOnInit(): void {
  }

 


  toggleLoginButton() {
    this.Login = !this.Login;
    this.isVisible = !this.isVisible;
  }
}
