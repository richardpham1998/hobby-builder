import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../../../../../frontend/src/app/models/user';
import { CommentService } from '../../../../../frontend/src/app/services/comment.service';
import { NotificationService } from '../../../../../frontend/src/app/services/notification.service';
import { UserService } from '../../../../../frontend/src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  userObject: User;
  eventOrPost: Number;
  idOfContent: String;

  content: String = '';
  userId: String = null;

  users: User[];

  profileObject: any = null;

  edited: Boolean = false;
  blankContent: Boolean = false;

  commentId: String;

  reportForm: FormGroup;


  constructor(
    private commentService: CommentService,
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.eventOrPost = Number(this.route.snapshot.paramMap.get('num'));

    //id of post/event/profile
    this.idOfContent = this.route.snapshot.paramMap.get('id');

    //actual comment id
    this.commentId = this.route.snapshot.paramMap.get('commentId');

    this.auth.user$.subscribe((profile) => {
      this.profileObject = profile;
      this.userId = this.profileObject.sub.substring(
        6,
        this.profileObject.sub.length
      );
      this.userService
        .getUser(this.userId)
        .subscribe((user) => (this.userObject = user));
    });

    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });

    this.reportForm =this.fb.group({
      content:['', Validators.required],
    });

  }

  onSubmit() {

    if(!this.reportForm.valid)
    {
      this.edited=false;
      this.blankContent=true;
    }
    else{

      this.blankContent=false;
      this.edited= true;

      var link: String=""; // post, event, or profile

      if (this.eventOrPost == 0) {
        link = 'post';
      } else if (this.eventOrPost == 1) {
        link = 'event';
      } else if (this.eventOrPost == 2) {
        link = 'profile';
      }


      //if comment id exists
      if (this.commentId != '.') {
        this.commentService.getComment(this.commentId).subscribe((comment) => {

          for(let i = 0; i< this.users.length;i++)
          {
            if(this.users[i].isAdmin)
            {
  
              var newNotification = {
                text:
                  this.userObject.username +
                  ' reported ' +
                  comment.author +
                  "'s comment, '"+comment.content+ "' in a " +
                  link +' with the following reason: '+ this.reportForm.value.content,
                linkType: link,
                user: this.users[i]._id, //notify each admin. set null for now.
                idToLink: this.idOfContent, //post/event/profile id
                date_created: new Date(),
                date_modified: null,
                newNotif: true,
                isClosed: false,
              };
  
              this.notificationService.addNotification(newNotification).subscribe();
            }
          }
        });
      }
      //comment does not exist
      else {
        for(let i = 0; i< this.users.length;i++)
        {
          if(this.users[i].isAdmin)
          {

            var newNotification = {
              text: this.userObject.username + ' reported the following ' + link +' with the following reason: '+ this.reportForm.value.content,
              linkType: link,
              user: this.users[i]._id, //notify each admin.
              idToLink: this.idOfContent, //post/event/profile id
              date_created: new Date(),
              date_modified: null,
              newNotif: true,
              isClosed: false,
            };

            this.notificationService.addNotification(newNotification).subscribe();
          }
        }
      }
    }
  }
}
