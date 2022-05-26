import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing'


import { PostServiceService } from './post-service.service';
import { PageOfItems } from 'src/models/page-of-item';
import { Post } from 'src/models/post';
import { User } from 'src/models/user';
import { Comment } from 'src/models/comment';
import { HttpClient } from '@angular/common/http';
import { PostUI } from 'src/models/PostUI';

describe('PostServiceService', () => {
  let service: PostServiceService;
  let httpTestingController: HttpTestingController;
  // let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[HttpClientTestingModule]
    });
    service = TestBed.inject(PostServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
    // httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchAllPost returns a page of post', () => {
    let req: TestRequest;
    let postPage: PageOfItems<PostUI> = {
      items: [],
      hasNext: false,
      totalElements: 0
    }

    let pageNumber = 0
    let pageSize = 0

    service.fetchListOfPosts(pageNumber,pageSize).subscribe((result) => {
      expect(result.totalElements).toBe(0)
    })

    req = httpTestingController.expectOne(`http://34.72.139.183/posts?pNum=${pageNumber}&pSize=${pageSize}`)
    req.flush(postPage)
  })

  it('getComments returns a page of comments', () => {
    let req: TestRequest;
    let commentPage: PageOfItems<Comment> = {
      items: [],
      hasNext: false,
      totalElements: 0
    }

    let pageNumber = 0
    let pageSize = 0
    let postId = 1

    service.getComments(postId,pageNumber,pageSize).subscribe((result) => {
      expect(result.totalElements).toBe(0)
    })

    req = httpTestingController.expectOne(`http://34.72.139.183/posts/comments?pId=${postId}&pNum=${pageNumber}&pSize=${pageSize}`)
    req.flush(commentPage)
  })
});


