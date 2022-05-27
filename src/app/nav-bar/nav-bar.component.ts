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


  constructor(public router: Router, private renderer: Renderer2) { 
    this.renderer.listen('window', 'click', (e:Event) => {
      if(e.target !== this.login.nativeElement){
        this.isVisible = false;
      }
    })
  }
  
  ngOnInit(): void {
  }

  Login: boolean = true;
  isVisible: boolean = false;

  toggleLoginButton() {
    this.Login = !this.Login;
    this.isVisible = !this.isVisible;
  }
  
}
