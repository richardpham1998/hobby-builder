import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { User } from '../../../../../frontend/src/app/models/user';
import { NotificationService } from '../../../../../frontend/src/app/services/notification.service';
import { Notification } from '../../../../../frontend/src/app/models/notification';
import { UserService } from '../../../../../frontend/src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

    //notification components
    notifications: Notification[] = [];

  newNotifications: Boolean = false;


  constructor(public auth : AuthService, private userService : UserService, private notificationService: NotificationService, @Inject(DOCUMENT) private doc) { }

  ngOnInit(): void {

    this.updateNotif();



    

  }

  updateNotif()
  {
    this.auth.user$.subscribe((profile)=>{
      this.profileObject = profile;

      if(this.profileObject != null)
      {
        this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);    
      }
      else{
        this.userId = null;
      }    


      if(this.userId != null)
      {
        this.userService.getUser(this.userId).subscribe(user=>
          {
            this.userObject=user;
            if(this.userObject==undefined)
            {
         
                alert("Your account has been deleted.");
                this.auth.logout({ returnTo: this.doc.location.origin });
      
            }
            this.getNotifications();
          })

      }});

  }

  

  getNotifications()
  {
    this.notifications = [];
    this.newNotifications=false;
    this.notificationService.getNotifications().subscribe(notifications=>
      {
        for(let i = 0; i < notifications.length; i++)
        {
          if(notifications[i].user === this.userId)
          {
            this.notifications.push(notifications[i]);
          }
          if(notifications[i].user=== this.userId && notifications[i].newNotif==true)
          {
            this.newNotifications = true;
          }
        }
      })
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
