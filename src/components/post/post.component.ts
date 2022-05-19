import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/services/post-service/post-service.service';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
