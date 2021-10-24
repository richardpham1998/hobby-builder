import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { EventService } from 'src/app/services/event.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css'],
})
export class EditCommentComponent implements OnInit {
  userObject: User;
  eventOrPost: Number;
  idToCommentOn: String;

  comment : Comment
  content: String = '';
  userId: String = null;
  email: String = null;
  event: String = null;
  post: String = null;
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;

  blankContent: boolean = false;
  edited: boolean = false;

  commentId: String;

  constructor(
    private commentService: CommentService,
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute
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

    this.commentService.getComment(this.commentId).subscribe(comment=>{

      this.comment=comment;
      this.content=comment.content;

    })
  }

  editComment() {

    if(this.content != null)
    {
      this.content.trim;
    }

    if(this.content==null  || this.content== "")
    {
      this.blankContent=true;
      this.edited=false;
    }
    else{
    this.comment.content=this.content;
   
    this.commentService.patchComment(this.commentId,this.comment).subscribe();

    this.blankContent=false;
    this.edited=true;
  }
  }
}
