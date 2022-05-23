import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
 imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  declarations: [
    AppComponent,
    PostComponent,
    NavBarComponent
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent, PostComponent, NavBarComponent]
})
export class AppModule { }
