import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Notification } from '../../../../../frontend/src/app/models/notification';
import { User } from '../../../../../frontend/src/app/models/user';
import { UserService } from '../../../../../frontend/src/app/services/user.service';

import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {



  //notification components
  notifications: Notification[] = [];



  //user component
  userObject: User;
  userId: String = null;
  profileObject: any = null;
  userName: String;

  //profile substring
  profileSubstring: String;

  constructor(
    private notificationService: NotificationService,
    public auth: AuthService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {


    this.auth.user$.subscribe((profile) => {
      this.profileObject = profile;
      this.userId = this.profileObject.sub.substring(
        6,
        this.profileObject.sub.length
      );
      this.userService
        .getUser(
          this.profileObject.sub.substring(6, this.profileObject.sub.length)
        )
        .subscribe((profile) => {
          this.userName = profile.username;
        });
    });

    this.notificationService.getNotifications().subscribe(notifications =>
      {
        for(let i = notifications.length-1; i >=0;i--)
        {
          if(notifications[i].user === this.userId)
          {
            this.notifications.push(notifications[i]);
          }
        }
      });
  }

  deleteNotification(notifId: String)
  {
    this.notificationService.deleteNotification(notifId).subscribe(notif=>
      {
        for(let i = this.notifications.length-1; i>=0;i--)
        {
          if(this.notifications[i]._id === notifId)
          {
            this.notifications.splice(i,1);
          }
        }
      });
  }

  clearAll()
  {
    for(let i = this.notifications.length-1; i>=0; i--)
    {
      this.notificationService.deleteNotification(this.notifications[i]._id).subscribe();

      
    }
    this.notifications = [];
  }

  turnOld(notifId: String)
  {
    this.notificationService.getNotification(notifId).subscribe(notif=>
      {
        notif.newNotif=false;
        this.notificationService.patchNotification(notifId,notif).subscribe();
      })    
  }

}
