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
  commentToLike: Comment;
  commentMap: { '-1': String[]; '0': String[]; '1': String[] };

  //tag components
  tagOptions: Tag[] = [];
  tagId: String = null;
  hobbyNames: String[] = [];
  hobbyObject: Tag;

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
    private tagService: TagService,
    private modalService: NgbModal,
    private userService: UserService
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
        this.tagService.getTags().subscribe((tags) => {
          this.tagOptions = tags;
          this.tagOptions.sort((a, b) => this.sortTags(a, b));
          this.loadHobbyNames();
        });

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

  //Comment functionalities

  //removes comment
  deleteComment(id: any) {
    var comments = this.comments;
    this.commentService.deleteComment(id).subscribe((data) => {
      for (var i = 0; i < comments.length; i++) {
        if (comments[i]._id == id) {
          comments.splice(i, 1);
        }
      }

      for (var i = 0; i < this.commentList.length; i++) {
        if (this.commentList[i]._id == id) {
          this.commentList.splice(i, 1);
        }
      }

      this.commentService
        .getComments()
        .subscribe((comments) => (this.comments = comments));
    });
  }

  //tag methods

  sortTags(a: Tag, b: Tag) {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  }

  loadHobbyNames() {
    for (let i = 0; i < this.tags.length; i++) {
      this.tagService.getTag(this.tags[i]).subscribe((hobby) => {
        this.hobbyObject = hobby;
        if (this.hobbyObject == null) {
          this.hobbyNames[i] = null;
        } else {
          this.hobbyNames[i] = this.hobbyObject.name;
        }
      });
    }
    this.hobbyObject = null;
  }

  addHobby() {
    if (this.tagId == null) {
      this.hobbyExists = false;
    } else if (this.tags.includes(this.tagId)) {
      this.hobbyExists = true;
    } else {
      this.hobbyExists = false;
      this.tags.push(this.tagId);

      this.postService.patchPost(this.id, this.post).subscribe((post) => {
        this.postService.getPost(this.id).subscribe((post) => {
          this.post = post;
          this.tags = this.post.tags;
        });
        this.loadHobbyNames();
      });

      this.tagId = null;
    }
  }

  deleteHobby(hobby: String) {
    for (var i = 0; i < this.tags.length; i++) {
      if (this.tags[i] == hobby) {
        this.tags.splice(i, 1);
        this.hobbyNames.splice(i, 1);
      }
    }

    this.postService.patchPost(this.id, this.post).subscribe((post) => {
      this.postService.getPost(this.id).subscribe((post) => {
        this.post = post;
        this.tags = this.post.tags;
      });
      this.loadHobbyNames();
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
              if (comments[i].post === this.post._id) {
                this.commentList.push(comments[i]);
              }
            }
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

      this.commentService
        .patchComment(id, this.commentToLike)
        .subscribe((comment) => {
          this.commentToLike = null;
          this.commentService.getComments().subscribe((comments) => {
            this.comments = comments;
            this.commentList = [];
            for (let i = comments.length - 1; i >= 0; i--) {
              if (comments[i].post === this.post._id) {
                this.commentList.push(comments[i]);
              }
            }
          });
        });
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
