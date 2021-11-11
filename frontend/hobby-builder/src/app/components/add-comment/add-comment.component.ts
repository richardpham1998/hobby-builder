import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { EventService } from 'src/app/services/event.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  user: User;
  eventOrPost: Number;
  idToCommentOn: String;

  content: String = '';
  userId: String = null;
  email: String = null;
  event: String = null;
  post: String = null;
  profile: String = null;
  date_created: Date = null;
  date_modified: Date = null;
  likes: { '-1': []; '0': []; '1': [] };

  profileObject: any = null;

  blankContent: boolean = false;
  added: boolean = false;

  commentId: String;

  constructor(
    private commentService: CommentService,
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private postService: PostService,
    private eventService: EventService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.eventOrPost = Number(this.route.snapshot.paramMap.get('num'));
    this.idToCommentOn = this.route.snapshot.paramMap.get('id');

    this.auth.user$.subscribe((profile) => {
      this.profileObject = profile;
      this.userId = this.profileObject.sub.substring(
        6,
        this.profileObject.sub.length
      );
      this.userService
        .getUser(this.userId)
        .subscribe((user) => (this.user = user));
    });
  }

  addComment(postOrEventOrProfile: Number, postEventId: String) {
    //indicator to link to comment
    var postId: String = null;
    var eventId: String = null;
    var profileId: String = null;

    //records details to store in notifications
    var link: String = null;
    var userToNotify: String = null;

    //0
    if (postOrEventOrProfile == 0) {
      postId = postEventId;
      link = 'post';

      this.postService.getPost(this.idToCommentOn).subscribe(
        post=>
        {
          userToNotify = post.user;
          this.completeComment(link, userToNotify, profileId, postId, eventId);
        }
      )
    }
    //1
    else if (postOrEventOrProfile == 1) {
      eventId = postEventId;
      link = 'event';

      this.eventService.getEvent(this.idToCommentOn).subscribe(
        event=>
        {
          userToNotify = event.user;
          this.completeComment(link, userToNotify, profileId, postId, eventId);
        }
      )
    }
    //2
    else if (postOrEventOrProfile == 2) {
      profileId = postEventId;
      link = 'profile';

      this.userService.getUser(this.idToCommentOn).subscribe(
        user=>
        {
          userToNotify = user._id;
          this.completeComment(link, userToNotify, profileId, postId, eventId);
        }
      )
    }
  }

  //completes the process of adding comment
  completeComment(link: String, userToNotify: String, profileId:String, postId:String, eventId: String)
  {
    if (this.content != null) {
      this.content.trim;
    }

    if (this.content == null || this.content == '') {
      this.blankContent = true;
      this.added = false;
    } else {
      const newNotification = {
        text: this.user.username + ' commented on your ' + link + '.',
        linkType: link,
        user: userToNotify, //person who created the post/event/profile
        idToLink: this.idToCommentOn, //post/event/profile id
        date_created: new Date(),
        date_modified: null,
      };

      const newComment = {
        content: this.content,
        user: this.userId,
        author: this.user.username,
        likes: this.likes,
        email: this.profileObject.name,
        profile: profileId,
        post: postId,
        event: eventId,
        date_created: new Date(),
        date_modified: null,
      };

      this.commentService.addComment(newComment).subscribe((comment) => {
        //create notification
        this.notificationService.addNotification(newNotification).subscribe();
      });

      this.content = '';
      this.userId = null;
      this.email = null;
      this.event = null;
      this.post = null;
      this.date_created = null;
      this.date_modified = null;
      this.date_created = null;
      this.date_modified = null;

      this.blankContent = false;
      this.added = true;
    }
  }
}
