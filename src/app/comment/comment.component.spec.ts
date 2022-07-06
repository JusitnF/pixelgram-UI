import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentComponent } from './comment.component';
import { PostServiceService } from 'src/services/post-service/post-service.service';
import { PageOfItems } from 'src/models/page-of-item';
import { Observable, of } from 'rxjs';
import { Comment } from 'src/models/comment';


class MockPostService{
  getComments(): Observable<PageOfItems<Comment>>{
    return of(new PageOfItems<Comment>())
  } 

 // getComments(){}
}

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let service: PostServiceService;
  let commentPage: PageOfItems<Comment> = new PageOfItems<Comment>() 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: PostServiceService, useClass: MockPostService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
   // service.getComments.prototype.returnValue(of(commentPage))
    service = TestBed.inject(PostServiceService)
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

  })