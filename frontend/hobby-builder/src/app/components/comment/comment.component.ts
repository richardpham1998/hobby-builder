import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { CommentService } from 'src/app/services/comment.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { Comment } from '../../models/comment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  // @Input() commentList: Comment[];
  // @Input() comments: Comment[];

  @Input() comment : Comment;

  //comment components
  commentToLike: Comment;
  commentMap: { '-1': String[]; '0': String[]; '1': String[] };

  //profile / user components
  profileObject: any = null;
  userId: String = null;
  userName: String = null;

  constructor(
    private commentService: CommentService,
    private modalService: NgbModal,
    private notificationService: NotificationService,
    public auth: AuthService,
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
  }

  //Comment functionalities

  //removes comment
  deleteComment(id: any) {
    // var comments = this.comments;
    this.commentService.deleteComment(id).subscribe((data) => {
      // for (var i = 0; i < comments.length; i++) {
      //   if (comments[i]._id == id) {
      //     comments.splice(i, 1);
      //   }
      // }

      // for (var i = 0; i < this.commentList.length; i++) {
      //   if (this.commentList[i]._id == id) {
      //     this.commentList.splice(i, 1);
      //   }
      // }

      // this.commentService
      //   .getComments()
      //   .subscribe((comments) => (this.comments = comments));
    });
  }

  //comment likes code
  likeComment(id: String) {
    this.commentService.getComment(id).subscribe((comment) => {
      this.commentToLike = comment;
      this.commentMap = this.commentToLike.likes;

      //like comment
      if (!this.commentMap['1'].includes(this.userId)) {
        this.commentMap['1'].push(this.userId);

        var link: String = 'post'; // post, event, or profile
        // var userToNotify: String = this.post.user; //id of owner of post, event or profile
        // var idToCommentOn: String = this.id; //id of post, event, or profile

        // const newNotification = {
        //   text: this.userName + ' liked your comment. ',
        //   linkType: link,
        //   user: userToNotify, //person who created the post/event/profile
        //   idToLink: idToCommentOn, //post/event/profile id
        //   date_created: new Date(),
        //   date_modified: null,
        // };

        // this.notificationService.addNotification(newNotification).subscribe();
      }
      //unlike comment
      else {
        for (let i = this.commentMap['1'].length - 1; i >= 0; i--) {
          if (this.commentMap['1'][i] === this.userId) {
            this.commentMap['1'].splice(i, 1);
          }
        }
      }

      //remove user from dislike section if user had disliked it
      for (let i = this.commentMap['-1'].length - 1; i >= 0; i--) {
        if (this.commentMap['-1'][i] === this.userId) {
          this.commentMap['-1'].splice(i, 1);
        }
      }

      this.commentToLike.likes = this.commentMap;

      this.commentService
        .patchComment(id, this.commentToLike)
        .subscribe((comment) => {
          this.commentToLike = null;
          this.commentService.getComments().subscribe((comments) => {
            // this.comments = comments;
            // this.commentList = [];
            // for (let i = comments.length - 1; i >= 0; i--) {
            //   if (comments[i].post === this.post._id) {
            //     this.commentList.push(comments[i]);
            //   }
            // }
          });
        });
    });
  }

  dislikeComment(id: String) {
    this.commentService.getComment(id).subscribe((comment) => {
      this.commentToLike = comment;
      this.commentMap = this.commentToLike.likes;

      //dislike comment
      if (!this.commentMap['-1'].includes(this.userId)) {
        this.commentMap['-1'].push(this.userId);
      }
      //un-dislike comment
      else {
        for (let i = this.commentMap['-1'].length - 1; i >= 0; i--) {
          if (this.commentMap['-1'][i] === this.userId) {
            this.commentMap['-1'].splice(i, 1);
          }
        }
      }

      //remove user from like section if user had liked it
      for (let i = this.commentMap['1'].length - 1; i >= 0; i--) {
        if (this.commentMap['1'][i] === this.userId) {
          this.commentMap['1'].splice(i, 1);
        }
      }

      this.commentToLike.likes = this.commentMap;

      // this.commentService
      //   .patchComment(id, this.commentToLike)
      //   .subscribe((comment) => {
      //     this.commentToLike = null;
      //     this.commentService.getComments().subscribe((comments) => {
      //       this.comments = comments;
      //       this.commentList = [];
      //       for (let i = comments.length - 1; i >= 0; i--) {
      //         if (comments[i].post === this.post._id) {
      //           this.commentList.push(comments[i]);
      //         }
      //       }
      //     });
      //   });
    });
  }

  //modal code
  //  openComment(content, id: String) {
  //   this.commentToDelete = id;
  //   this.modalService
  //     .open(content, { ariaLabelledBy: 'modal-comment' })
  //     .result.then(
  //       (result) => {
  //         this.closeResult = `Closed with: ${result}`;
  //         if (this.commentToDelete != null) {
  //           this.deleteComment(this.commentToDelete);
  //         }
  //       },
  //       (reason) => {
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //       }
  //     );
}
