import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { User } from 'src/models/user';
import { PostServiceService } from 'src/services/post-service/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  
  User = new User();
  Post = new Post();
  
  ngOnInit(): void {
  }

}
