import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  // comments: Comment[] = [];
  
  // content: String = '';
  // userId: String = null;
  // email: String = null;
  // event: String = null;
  // post: String = null;
  // date_created: Date = null;
  // date_modified: Date = null;

  // profileObject: any = null;

  // blankContent: boolean = false;

  constructor(private commentService : CommentService, public auth: AuthService) { }

  ngOnInit(): void {
    // this.auth.user$.subscribe((profile)=>(this.profileObject = profile));
  }

  // addComment(postOrEvent : Boolean, postEventId : String)
  // {

  //   var postId: String = null;
  //   var eventId: String = null;

  //   //0
  //   if(postOrEvent==false)
  //   {
  //     postId = postEventId;
  //   }
  //   //1
  //   else
  //   {
  //     eventId = postEventId;
  //   }

  //   this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);

  //   if(this.content != null)
  //   {
  //     this.content.trim;
  //   }

  //   if(this.content==null  || this.content== "")
  //   {
  //     this.blankContent=true;
  //   }
  //   else{
  //     const newComment =
  //     {
  //       content: this.content,
  //       user: this.userId,
  //       email: this.profileObject.name,
  //       post: postId,
  //       event: eventId,
  //       date_created: new Date,
  //       date_modified: null
  //     }

  //     this.content = '';
  //     this.userId= null;
  //     this.email = null;
  //     this.event= null;
  //     this.post= null;
  //     this.date_created= null;
  //     this.date_modified= null;
  //     this.date_created= null;
  //     this.date_modified= null;

  //     this.commentService.addComment(newComment).subscribe(comment=>this.comments.push(comment));

  //     this.blankContent=false;
  //     alert("Successfully added");
  //   }

  //   this.commentService.getComments().subscribe(comments=>this.comments=comments);

  // }

}
