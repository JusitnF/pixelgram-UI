import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageOfItems } from 'src/models/page-of-item';
import { User } from 'src/models/user';
import { PostServiceService} from 'src/services/post-service/post-service.service'
import { Observable, of } from 'rxjs'
import { PostComponent } from './post.component';
import { Comment } from 'src/models/comment'

class MockPostService{
  getComments(): Observable<PageOfItems<Comment>>{
    return of(new PageOfItems<Comment>())
  }} 


describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let httpTestingController: HttpTestingController;
  let service: PostServiceService;
  let commentPage: PageOfItems<Comment> = new PageOfItems<Comment>() 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      imports: [HttpClientTestingModule],
      providers: [ HttpClient, HttpHandler,{provide: PostServiceService, useClass: MockPostService} ]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PostServiceService)
    component.postData = {
      post: {id: 5,
        user: new User(),
        img: "banana",
        description: "banana",
        createdOn: new Date(),
       
        
      },
      comments: new PageOfItems<Comment>()} ;
    fixture.detectChanges();
  });

  const mockResponse: PageOfItems<Comment> ={
    items: [],
    hasNext: false,
    totalElements: 1
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getComments on service when showMoreComments() is called', () => {
    let spy = spyOn(service, 'getComments').and.returnValue(of(mockResponse));
    component.showMoreComments();
    expect(spy).toHaveBeenCalled();
   });
});
