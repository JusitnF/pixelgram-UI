import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostUI } from 'src/models/PostUI';
import { PageOfItems } from 'src/models/page-of-item';



@Injectable({
  providedIn: 'root'
})

export class PostServiceService {
  private baseURL = "http://34.72.139.183/posts"

  constructor(private http: HttpClient) { }

  fetchListOfPosts(pageNumber: number, pageSize: number):Observable<PageOfItems<PostUI>> {
    return this.http.get<PageOfItems<PostUI>>(`${this.baseURL}?pNum=${pageNumber}&pSize=${pageSize}`);
  }
}
