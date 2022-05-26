import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/models/comment';
import { PageOfItems } from 'src/models/page-of-item';
import { Post } from 'src/models/post';
import { PostUI } from 'src/models/PostUI';
import { PostServiceService } from 'src/services/post-service/post-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  postId: number = 0;
  @Input ()
  comments: PageOfItems<Comment> = new PageOfItems<Comment>();
  pageNumber: number = 0;
  pageSize: number = 5;
  showComment = false; 

  constructor(private postService: PostServiceService) { }
  
  ngOnInit(): void {
    this.postService.getComments(this.postId, this.pageNumber, this.pageSize).subscribe((data: PageOfItems<Comment>) => {
      this.comments = data;
    })
  }
  showMoreComments(){
    this.postService.getComments(this.postId, this.pageNumber, this.pageSize += 5).subscribe((data) => {
      this.comments = data;
      this.showComment = data.hasNext;   
    })

  }
}
