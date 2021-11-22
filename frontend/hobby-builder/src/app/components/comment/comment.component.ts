import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { CommentService } from 'src/app/services/comment.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { Comment } from '../../models/comment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() commentList: Comment[];
  @Input() comments: Comment[];
  @Input() comment: Comment;

  //author of post/event/profile
  @Input() owner: String;

  //0 for post, 1 for event, 2 for profile
  @Input() type: String;

  //id of post/event/user
  @Input() typeId: String;

  //refresh screen if comment is modified in any way
  @Output('refresh') refresh = new EventEmitter<Comment[]>();

  //comment components
  commentToLike: Comment;
  commentMap: { '-1': String[]; '0': String[]; '1': String[] };

  //profile / user components
  profileObject: any = null;
  userId: String = null;
  userName: String = null;

  visitor: User;

  //modal components
  closeResult = '';
  postToDelete: String = null;
  commentToDelete: String = null;

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
          this.visitor = profile;
        });
    });
  }

  //Comment functionalities

  //refresh comment
  refreshComments() {
    this.refresh.emit(this.commentList);
  }

  //removes comment
  deleteComment(id: any) {
    this.commentService.getComment(id).subscribe(commentToRemove => {
     
      this.commentService.deleteComment(id).subscribe((data) => {
        for (var i = 0; i < this.commentList.length; i++) {
          if (this.commentList[i]._id == id) {
            this.commentList.splice(i, 1);
          }
        }
        this.refreshComments();

        var userToNotify: String = this.owner; //id of owner of post, event or profile
        var idToCommentOn: String = this.typeId; //id of post, event, or profile

        if (
          this.visitor.isAdmin &&
          this.visitor._id != commentToRemove.user
        ) {

          // post, event, or profile
          var link: String;

          if (this.type === '0') {
            link = 'post';
          } else if (this.type === '1') {
            link = 'event';
          } else if (this.type === '2') {
            link = 'profile';
          }

          const newNotification = {
            text:
              'Admin ' +
              this.visitor.username +
              ' deleted your comment: '
              +"'"+commentToRemove.content+"'",
            linkType: link,
            user: commentToRemove.user, //person who created the comment
            idToLink: idToCommentOn, //post/event/profile id
            date_created: new Date(),
            date_modified: null,
            newNotif: true,
          };

          this.notificationService.addNotification(newNotification).subscribe();
        }
      });
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

        alert(this.commentToLike.user + ' ' + this.visitor._id);
        if (this.commentToLike.user !== this.visitor._id) {
          // post, event, or profile
          var link: String;

          if (this.type === '0') {
            link = 'post';
          } else if (this.type === '1') {
            link = 'event';
          } else if (this.type === '2') {
            link = 'profile';
          }

          var userToNotify: String = this.owner; //id of owner of post, event or profile
          var idToCommentOn: String = this.typeId; //id of post, event, or profile

          const newNotification = {
            text:
              this.visitor.username +
              ' liked your comment: ' +
              this.commentToLike.content,
            linkType: link,
            user: this.commentToLike.user, //person who created the comment
            idToLink: idToCommentOn, //post/event/profile id
            date_created: new Date(),
            date_modified: null,
            newNotif: true,
          };

          this.notificationService.addNotification(newNotification).subscribe();
        }
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
            this.comments = comments;
            this.commentList = [];
            for (let i = comments.length - 1; i >= 0; i--) {
              if (this.type === '0') {
                if (comments[i].post === this.typeId) {
                  this.commentList.push(comments[i]);
                }
              }
              if (this.type === '1') {
                if (comments[i].event === this.typeId) {
                  this.commentList.push(comments[i]);
                }
              }
              if (this.type === '2') {
                if (comments[i].profile === this.typeId) {
                  this.commentList.push(comments[i]);
                }
              }
            }
          });
        });
      this.refreshComments();
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

      this.commentService
        .patchComment(id, this.commentToLike)
        .subscribe((comment) => {
          this.commentToLike = null;
          this.commentToLike = null;
          this.commentService.getComments().subscribe((comments) => {
            this.comments = comments;
            this.commentList = [];
            for (let i = comments.length - 1; i >= 0; i--) {
              if (this.type === '0') {
                if (comments[i].post === this.typeId) {
                  this.commentList.push(comments[i]);
                }
              }
              if (this.type === '1') {
                if (comments[i].event === this.typeId) {
                  this.commentList.push(comments[i]);
                }
              }
              if (this.type === '2') {
                if (comments[i].profile === this.typeId) {
                  this.commentList.push(comments[i]);
                }
              }
            }
          });
        });

      this.refreshComments();
    });
  }

  //modal code
  openComment(content, id: String) {
    this.commentToDelete = id;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-comment' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          if (this.commentToDelete != null) {
            this.deleteComment(this.commentToDelete);
          }
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    this.postToDelete = null;
    this.commentToDelete = null;

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
