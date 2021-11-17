import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';
import { Tag } from '../../models/tag';
import { PostService } from '../../services/post.service';
import { AuthService } from '@auth0/auth0-angular';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService],
})
export class PostComponent implements OnInit {
  post: Post = null;
  id: String = null;

  userName: String;

  //post components
  posts: Post[] = [];
  comments: Comment[] = [];
  title: String = null;
  likes: { '-1': String[]; '0': String[]; '1': String[] };
  userId: String = null;
  author: String = null;
  description: String = '';
  post_comments: String[] = [];
  tags: String[] = [];
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;
  blankTitle: boolean = false;
  blankDescription: boolean = false;
  editPost: boolean = false;

  hobbyExists: boolean = false;

  //comment components
  commentList: Comment[] = [];

  //modal components
  closeResult = '';
  postToDelete: String = null;
  commentToDelete: String = null;

  //user component
  userObject: User;

  //profile substring
  profileSubstring: String;

  constructor(
    private postService: PostService,
    public auth: AuthService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.loadPost();

    this.postService.getPosts().subscribe((posts) => (this.posts = posts));

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

  loadPost() {
    this.postService.getPost(this.id).subscribe((post) => {
      this.post = post;
      this.likes = this.post.likes;
      if (this.post['name'] == 'CastError') {
        this.post = null;
      } else {
        this.tags = this.post.tags;

        this.commentService.getComments().subscribe((comments) => {
          this.comments = comments;
          this.commentList = [];
          for (let i = comments.length - 1; i >= 0; i--) {
            if (comments[i].post === this.post._id) {
              this.commentList.push(comments[i]);
            }
          }
        });
      }
    });
  }

  //delete post
  deletePost(id: any) {
    var posts = this.posts;
    this.postService.deletePost(id).subscribe((data) => {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i]._id == id) {
          posts.splice(i, 1);
        }
      }

      for (var i = this.comments.length - 1; i >= 0; i--) {
        if (this.comments[i].post == id) {
          this.commentService.deleteComment(this.comments[i]._id).subscribe();
          this.comments.splice(i, 1);
        }
      }

      this.postService.getPost(this.id).subscribe((post) => {
        this.post = post;
        if (this.post['name'] == 'CastError') {
          this.post = null;
        }
      });
    });
  }


  //post like methods
  likePost(id: String) {
    //like comment
    if (!this.likes['1'].includes(this.userId)) {
      this.likes['1'].push(this.userId);

      var link: String = 'post'; // post, event, or profile
      var userToNotify: String = this.post.user; //id of owner of post, event or profile
      var idToCommentOn: String = this.id; //id of post, event, or profile

      const newNotification = {
        text: this.userName + ' liked your '+link+'.',
        linkType: link,
        user: userToNotify, //person who created the post/event/profile
        idToLink: idToCommentOn, //post/event/profile id
        date_created: new Date(),
        date_modified: null,
      };

      this.notificationService.addNotification(newNotification).subscribe();
    }
    //unlike comment
    else {
      for (let i = this.likes['1'].length - 1; i >= 0; i--) {
        if (this.likes['1'][i] === this.userId) {
          this.likes['1'].splice(i, 1);
        }
      }
    }

    //remove user from dislike section if user had disliked it
    for (let i = this.likes['-1'].length - 1; i >= 0; i--) {
      if (this.likes['-1'][i] === this.userId) {
        this.likes['-1'].splice(i, 1);
      }
    }

    this.post.likes = this.likes;
    this.postService.patchPost(id, this.post).subscribe();
  }

  dislikePost(id: String) {
    this.postService.getPost(id).subscribe((post) => {
      this.post = post;
      this.likes = this.post.likes;

      //dislike post
      if (!this.likes['-1'].includes(this.userId)) {
        this.likes['-1'].push(this.userId);
      }
      //un-dislike post
      else {
        for (let i = this.likes['-1'].length - 1; i >= 0; i--) {
          if (this.likes['-1'][i] === this.userId) {
            this.likes['-1'].splice(i, 1);
          }
        }
      }

      //remove user from like section if user had disliked it
      for (let i = this.likes['1'].length - 1; i >= 0; i--) {
        if (this.likes['1'][i] === this.userId) {
          this.likes['1'].splice(i, 1);
        }
      }

      this.post.likes = this.likes;
      this.postService.patchPost(id, this.post).subscribe();
    });
  }


  //modal code
  openPost(content, id: String) {
    this.postToDelete = id;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-post' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          if (this.postToDelete != null) {
            this.deletePost(this.postToDelete);
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
