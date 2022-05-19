import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing'

import { PostServiceService } from './post-service.service';
import { PageOfItems } from 'src/models/page-of-item';
import { Post } from 'src/models/post';
import { User } from 'src/models/user';
import { Comment } from 'src/models/comment';

describe('PostServiceService', () => {
  let service: PostServiceService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(PostServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchAllPost returns a page of post', () => {
    let req: TestRequest;
    let postPage: PageOfItems<Post> = {
      items: [],
      hasNext: false,
      totalElements: 0
    }

    let pageNumber = 0
    let pageSize = 0

    service.fetchListOfPosts(pageNumber,pageSize).subscribe((result) => {
      expect(result.totalElements).toBe(0)
    })

    req = httpTestingController.expectOne(`http://34.72.139.183/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    req.flush(postPage)
  })

  it('fetchPagePost returns one post', () => {
    let req: TestRequest;

    let user1: User = {
      id: 0,
      username: " ",
      profileImg: " ",
    } 
    let commentPage: PageOfItems<Comment> = {
      items: [],
      hasNext: false,
      totalElements: 0
    }
    let post: Post = {
      id: 0,
      user: user1,
      img: " ",
      description: " ",
      createdOn: new Date(),
      comments: []
    }
    let pageNumber = 0
    let pageSize = 0

    service.fetchPagedPosts(post,pageNumber,pageSize).subscribe((result) => {
      expect(result.totalElements).toBe(0)
    })

    req = httpTestingController.expectOne(`http://34.72.139.183/posts/${post.id}/comments?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    req.flush(commentPage)
  })
});
