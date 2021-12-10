import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>
  {
    //return this.http.get<User[]>('http://localhost:3000/api/users');
    return this.http.get<User[]>('api/users');
  }

  getUser(id: String): Observable<User>
  {
    //return this.http.get<User>('http://localhost:3000/api/user/'+id);
    return this.http.get<User>('api/user/'+id);
  }

  addUser(newPost: User)
  {
    var headers = new HttpHeaders();
    //return this.http.post<User>('http://localhost:3000/api/user',newPost, {headers:headers});
    return this.http.post<User>('api/user',newPost, {headers:headers});
  }

  deleteUser(id: String)
  {
    //return this.http.delete<User>('http://localhost:3000/api/user/'+id);
    return this.http.delete<User>('api/user/'+id);
  }

  patchUser(id: String, newUser: User)
  {
    var headers = new HttpHeaders();
    //return this.http.patch<User>('http://localhost:3000/api/user/'+id,newUser, {headers:headers});
    return this.http.patch<User>('api/user/'+id,newUser, {headers:headers});
  }
}
