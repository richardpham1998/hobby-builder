import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Notification} from '../models/notification';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<Notification[]>
  {
    return this.http.get<Notification[]>('http://localhost:3000/api/notifications');
  }

  getNotification(id: String): Observable<Notification>
  {
    return this.http.get<Notification>('http://localhost:3000/api/notification/'+id);
  }

  addNotification(newNotification: Notification)
  {
    var headers = new HttpHeaders();
    return this.http.post<Notification>('http://localhost:3000/api/notification',newNotification, {headers:headers});
  }

  deleteNotification(id: String)
  {
    return this.http.delete<Notification>('http://localhost:3000/api/notification/'+id);
  }

  patchNotification(id: String, newNotification: Notification)
  {
    var headers = new HttpHeaders();
    return this.http.patch<Notification>('http://localhost:3000/api/notification/'+id,newNotification, {headers:headers});
  }

}
