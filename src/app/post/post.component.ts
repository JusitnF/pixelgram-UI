import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PageOfItems } from 'src/models/page-of-item';
import { PostUI } from 'src/models/PostUI';
import { User } from 'src/models/user';
import { PostServiceService } from 'src/services/post-service/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  User = new User();
  postData = new PageOfItems<PostUI>();

  constructor(private postServiceService: PostServiceService) { 
  
  }
    pageNumber: number = 0;
    pageSize: number = 5;
  
  ngOnInit(): void {
    this.getPost();
  }

  public getPost() {
    this.postServiceService.fetchListOfPosts(this.pageNumber, this.pageSize).subscribe(data => {
      this.postData = data;
      console.log(this.postData.items);
    });
    
  }

}
