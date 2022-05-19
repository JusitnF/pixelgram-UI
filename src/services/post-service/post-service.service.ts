import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { PageOfItems } from 'src/models/page-of-item';



@Injectable({
  providedIn: 'root'
})

export class PostServiceService {
  private baseURL = "http://34.72.139.183/posts"

  constructor(private http: HttpClient) { }

  fetchListOfPosts(pageNumber: number, pageSize: number):Observable<PageOfItems<Post>> {
    return this.http.get<PageOfItems<Post>>(`${this.baseURL}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  fetchPagedPosts(post: Post, pageNumber: number, pageSize: number):Observable<PageOfItems<Post>> {
    return this.http.get<PageOfItems<Post>>(`${this.baseURL}/${post.id}/comments?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  } 
}
