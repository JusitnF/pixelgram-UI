import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostUI } from 'src/models/PostUI';
import { PageOfItems } from 'src/models/page-of-item';
import { Comment } from 'src/models/comment';



@Injectable({
  providedIn: 'root'
})

export class PostServiceService {
  private baseURL = "http://34.72.139.183/"

  constructor(private http: HttpClient) { }

  fetchListOfPosts(pageNumber: number, pageSize: number):Observable<PageOfItems<PostUI>> {
    return this.http.get<PageOfItems<PostUI>>(`${this.baseURL}posts?pNum=${pageNumber}&pSize=${pageSize}`);
  }

  getComments(postId: number, pageNumber: number, pageSize: number):Observable<PageOfItems<Comment>> {
    return this.http.get<PageOfItems<Comment>>(`${this.baseURL}comments?pId=${postId}&pNum=${pageNumber}&pSize=${pageSize}`)
  }}
