import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { EventService } from 'src/app/services/event.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  user: User;
  eventOrPost: Number;
  idToCommentOn: String;

  commentForm: FormGroup;

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

  added: boolean = false;

  commentId: String;

  blankContent: Boolean = false;

  constructor(
    private commentService: CommentService,
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private postService: PostService,
    private eventService: EventService,
    private notificationService: NotificationService,
    private fb: FormBuilder
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

      this.commentForm = this.fb.group({
        content: ['', Validators.required],
        userId: this.userId,
      });

      this.userService.getUser(this.userId).subscribe((user) => {
        this.user = user;
      });
    });
  }

  onSubmit(): void {
    if (!this.commentForm.valid) {
      this.added = false;
      this.blankContent = true;
    } else {
      //indicator to link to comment
      var postId: String = null;
      var eventId: String = null;
      var profileId: String = null;

      //records details to store in notifications
      var link: String = null;
      var userToNotify: String = null;

      //0
      if (this.eventOrPost == 0) {
        postId = this.idToCommentOn;
        link = 'post';

        this.postService.getPost(this.idToCommentOn).subscribe((post) => {
          userToNotify = post.user;
          this.completeComment(link, userToNotify, profileId, postId, eventId);
        });
      }
      //1
      else if (this.eventOrPost == 1) {
        eventId = this.idToCommentOn;
        link = 'event';

        this.eventService.getEvent(this.idToCommentOn).subscribe((event) => {
          userToNotify = event.user;
          this.completeComment(link, userToNotify, profileId, postId, eventId);
        });
      }
      //2
      else if (this.eventOrPost == 2) {
        profileId = this.idToCommentOn;
        link = 'profile';

        this.userService.getUser(this.idToCommentOn).subscribe((user) => {
          userToNotify = user._id;
          this.completeComment(link, userToNotify, profileId, postId, eventId);
        });
      }
    }
  }

  //completes the process of adding comment
  completeComment(
    link: String,
    userToNotify: String,
    profileId: String,
    postId: String,
    eventId: String
  ) {
    if (this.commentForm.value.content != null) {
      this.commentForm.value.content.trim;
    }

    const newNotification = {
      text: this.user.username + ' commented on your ' + link + '.',
      linkType: link,
      user: userToNotify, //person who created the post/event/profile
      idToLink: this.idToCommentOn, //post/event/profile id
      date_created: new Date(),
      date_modified: null,
      newNotif: true,
    };

    const newComment = {
      content: this.commentForm.value.content,
      user: this.commentForm.value.userId,
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

    this.blankContent = false;
    this.added = true;
  }
}
