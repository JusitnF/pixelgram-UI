import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { PageOfItems } from 'src/models/page-of-item';
import { PostUI } from 'src/models/PostUI';
import { User } from 'src/models/user';
import { PostServiceService } from 'src/services/post-service/post-service.service';
import { Comment } from 'src/models/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  User = new User();
  @Input()
  postData: PostUI = new PostUI();
  
  constructor(private postService: PostServiceService) { 
  
  }
  @Input()
  commentPage: PageOfItems<Comment> = new PageOfItems<Comment>();
  pageNumber: number = 0;
  pageSize: number = 5;
  showComment = false;
  commentButton:boolean = false;
    
  ngOnInit(): void {
   
  }

  showMoreComments(){
    //++ before pageNumber to increment it before the function is used
    this.postService.getComments(this.postData.post.id, ++this.pageNumber, this.pageSize).subscribe(data => {
      this.showComment = data.hasNext; 
      if(this.commentPage.hasNext){
        //apending comments to the comment page
        this.commentPage.items = [...this.commentPage.items, ...data.items]
        this.commentButton = true;
      } else{
        this.commentButton = false;
      }  
    });
  }

  showLessComments(){
    this.postService.getComments(this.postData.post.id, this.pageNumber, this.pageSize).subscribe(data => {
      this.commentPage.items = data.items});
  }
}
  
  



