import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Tag} from '../models/tag';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]>
  {
    return this.http.get<Tag[]>('http://localhost:3000/api/tags');
  }

  getTag(id: String): Observable<Tag>
  {
    return this.http.get<Tag>('http://localhost:3000/api/tag/'+id);
  }

  addTag(newTag: Tag)
  {
    var headers = new HttpHeaders();
    return this.http.post<Tag>('http://localhost:3000/api/tag',newTag, {headers:headers});
  }

  deleteTag(id: String)
  {
    return this.http.delete<Tag>('http://localhost:3000/api/tag/'+id);
  }

  patchTag(id: String, newTag: Tag)
  {
    var headers = new HttpHeaders();
    return this.http.patch<Tag>('http://localhost:3000/api/tag/'+id,newTag, {headers:headers});
  }
}
