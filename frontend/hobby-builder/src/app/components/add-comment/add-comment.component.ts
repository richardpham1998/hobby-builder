import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { EventService } from 'src/app/services/event.service';
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
  date_created: Date = null;
  date_modified: Date = null;

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
    private eventService: EventService
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

  addComment(postOrEvent: Number, postEventId: String) {
    var postId: String = null;
    var eventId: String = null;

    //0
    if (postOrEvent == 0) {
      postId = postEventId;
    }
    //1
    else if (postOrEvent == 1) {
      eventId = postEventId;
    }

    if (this.content != null) {
      this.content.trim;
    }

    if (this.content == null || this.content == '') {
      this.blankContent = true;
      this.added = false;
    } else {
      const newComment = {
        content: this.content,
        user: this.userId,
        author: this.user.username,
        email: this.profileObject.name,
        post: postId,
        event: eventId,
        date_created: new Date(),
        date_modified: null,
      };

      this.commentService.addComment(newComment).subscribe();

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
