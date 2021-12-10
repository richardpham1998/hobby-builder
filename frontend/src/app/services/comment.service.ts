import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Comment} from '../models/comment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]>
  {
    //return this.http.get<Comment[]>('http://localhost:3000/api/comments');
    return this.http.get<Comment[]>('api/comments');
  }

  getComment(id: String): Observable<Comment>
  {
    //return this.http.get<Comment>('http://localhost:3000/api/comment/'+id);
    return this.http.get<Comment>('api/comment/'+id);
  }

  addComment(newComment: Comment)
  {
    var headers = new HttpHeaders();
    //return this.http.post<Comment>('http://localhost:3000/api/comment',newComment, {headers:headers});
    return this.http.post<Comment>('api/comment',newComment, {headers:headers});
  }

  deleteComment(id: String)
  {
    //return this.http.delete<Comment>('http://localhost:3000/api/comment/'+id);
    return this.http.delete<Comment>('api/comment/'+id);
  }

  patchComment(id: String, newComment: Comment)
  {
    var headers = new HttpHeaders();
    //return this.http.patch<Comment>('http://localhost:3000/api/comment/'+id,newComment, {headers:headers});
    return this.http.patch<Comment>('api/comment/'+id,newComment, {headers:headers});
  }

}
