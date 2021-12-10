import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css'],
})
export class EditCommentComponent implements OnInit {
  userObject: User;
  eventOrPost: Number;
  idToCommentOn: String;

  comment: Comment;
  content: String = '';
  userId: String = null;
  email: String = null;
  event: String = null;
  post: String = null;
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;

  edited: boolean = false;

  commentId: String;

  commentForm: FormGroup;

  blankContent: Boolean = false;

  constructor(
    private commentService: CommentService,
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.eventOrPost = Number(this.route.snapshot.paramMap.get('num'));

    //id of post/event to comment on
    this.idToCommentOn = this.route.snapshot.paramMap.get('id');

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

    this.commentService.getComment(this.commentId).subscribe((comment) => {
      this.commentForm = this.fb.group({
        content: ['', Validators.required],
      });

      this.comment = comment;
      this.commentForm.setValue({ content: comment.content });
    });
  }

  onSubmit() {
    if (!this.commentForm.valid) {
      if (this.commentForm.value.content === '') {
        this.blankContent = true;
      } else {
        this.blankContent = false;
      }
    } else {
      this.blankContent = false;

      this.comment.content = this.commentForm.value.content;
      this.commentService
        .patchComment(this.commentId, this.comment)
        .subscribe();
      this.edited = true;
    }
  }
}
