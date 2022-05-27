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
  @Input()
  comments: PageOfItems<Comment> = new PageOfItems<Comment>();
  @Input() 
  postId: number = 0;
  

  constructor(private postService: PostServiceService) { 
  
  }
  
  pageNumber: number = 0;
  pageSize: number = 5;
  showComment = false;
    

  
  ngOnInit(): void {
   this.showMoreComments();
  }

  showMoreComments(){
    this.postService.getComments(this.postId, this.pageNumber, this.pageSize += 5).subscribe(data => {
      this.comments = data;
      this.showComment = data.hasNext;   
    });

    
}
}
  
  



