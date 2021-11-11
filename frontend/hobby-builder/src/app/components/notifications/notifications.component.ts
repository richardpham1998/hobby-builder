import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import {Notification} from '../../models/notification';
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
        for(let i = 0; i < notifications.length; i++)
        {
          if(notifications[i].user === this.userId)
          {
            this.notifications.push(notifications[i]);
          }
        }
      });
  }


}
