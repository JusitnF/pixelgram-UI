import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeedComponent } from './feed/feed.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommentComponent } from './comment/comment.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginButtonComponent } from './login-button/login-button.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
 imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    PostComponent,
    UserComponent,
    NavBarComponent,
    FeedComponent,
    LandingPageComponent,
    NavBarComponent,
    LoginPageComponent,
    LoginFormComponent,
    CommentComponent,
    LoginButtonComponent
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }