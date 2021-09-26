import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>
  {
    return this.http.get<Post[]>('http://localhost:3000/api/posts');
  }

  getPost(id: String): Observable<Post>
  {
    return this.http.get<Post>('http://localhost:3000/api/post/'+id);
  }

  addPost(newPost: Post)
  {
    var headers = new HttpHeaders();
    return this.http.post<Post>('http://localhost:3000/api/post',newPost, {headers:headers});
  }

  deletePost(id: String)
  {
    return this.http.delete<Post>('http://localhost:3000/api/post/'+id);
  }

  patchPost(id: String, newPost: Post)
  {
    var headers = new HttpHeaders();
    return this.http.patch<Post>('http://localhost:3000/api/post/'+id,newPost, {headers:headers});
  }

}
