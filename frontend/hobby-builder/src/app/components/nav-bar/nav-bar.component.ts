import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {

  profileObject: any;
  userId: String;

  userObject: User;

  newNotifications: Boolean = false;


  constructor(public auth : AuthService, private userService : UserService, private notificationService: NotificationService) { }

  ngOnInit(): void {

    this.auth.user$.subscribe((profile)=>{
      this.profileObject = profile;
      this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);

      if(this.userId != null)
      {
        this.userService.getUser(this.userId).subscribe(user=>
          {
            this.userObject=user;
          })

         this.getNotifications();

      }


    });

  }

  updateNotif()
  {
    this.getNotifications();
  }

  getNotifications()
  {
    this.newNotifications=false;
    this.notificationService.getNotifications().subscribe(notifications=>
      {
        for(let i = 0; i < notifications.length; i++)
        {
          if(notifications[i].user=== this.userId && notifications[i].newNotif==true)
          {
            this.newNotifications = true;
            break;
          }
        }
      })
  }

}
