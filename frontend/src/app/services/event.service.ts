import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Event} from '../models/event'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]>
  {
    //return this.http.get<Event[]>('http://localhost:3000/api/events');
    return this.http.get<Event[]>('api/events');
  }

  getEvent(id: String): Observable<Event>
  {
    //return this.http.get<Event>('http://localhost:3000/api/event/'+id);
    return this.http.get<Event>('api/event/'+id);
  }

  addEvent(newEvent: Event)
  {
    var headers = new HttpHeaders();
    //return this.http.post<Event>('http://localhost:3000/api/event',newEvent, {headers:headers});
    return this.http.post<Event>('api/event',newEvent, {headers:headers});
  }

  deleteEvent(id: String)
  {
    //return this.http.delete<Event>('http://localhost:3000/api/event/'+id);
    return this.http.delete<Event>('api/event/'+id);
  }

  patchEvent(id: String, newEvent: Event)
  {
    var headers = new HttpHeaders();
    //return this.http.patch<Event>('http://localhost:3000/api/event/'+id,newEvent, {headers:headers});
    return this.http.patch<Event>('api/event/'+id,newEvent, {headers:headers});
  }
}
