import { ThrowStmt } from '@angular/compiler';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { TagService } from '../../../../../frontend/src/app/services/tag.service';
import { User } from '../../models/user';
import { Tag } from '../../models/tag';
import { UserService } from '../../services/user.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentService } from '../../../../../frontend/src/app/services/comment.service';
import { Comment } from '../../models/comment';
import { NotificationService } from '../../../../../frontend/src/app/services/notification.service';
import { Post } from '../../../../../frontend/src/app/models/post';
import { PostService } from '../../../../../frontend/src/app/services/post.service';
import { Event } from '../../../../../frontend/src/app/models/event';
import { EventService } from '../../../../../frontend/src/app/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileJson: String = null;

  id: String;

  //visitor object
  visitorObject: User;

  //from UserService
  profile: User = null;
  email: String = null;
  hobbies: String[] = [];
  hobbyNames: String[] = [];
  userComments: String[] = [];

  hobby: String = null;

  //option to see user info or comments
  option: Number = 1;

  //Auth0
  profileObject: any = null;

  userId: String;

  tags: Tag[] = [];
  tagId: String = null;

  hobbyObject: Tag;
  hobbyExists: Boolean = false;

  //comment components
  comments: Comment[] = [];
  commentList: Comment[] = [];
  commentToLike: Comment;
  commentMap: { '-1': String[]; '0': String[]; '1': String[] };


  //modal components
  closeResult = '';
  commentToDelete: String = null;

  //arrays to display
  postsFromUser: Post[] = [];
  eventsFromUser: Event[] = [];
  commentsFromUser: Comment[] = [];
  eventsUserTracked: Event[] = [];
  friendsOfUser: User[] = [];

  //for prev and next functionality
  ind1 : number = 0;
  ind2 : number = 0;
  ind3 : number = 0;
  ind4 : number = 0;
  ind5 : number = 0;

  constructor(
    public auth: AuthService,
    private route: ActivatedRoute,
    private userService: UserService,
    private tagService: TagService,
    private modalService: NgbModal,
    private commentService: CommentService,
    private postService: PostService,
    private eventService: EventService,
    private notificationService: NotificationService,
    private router: Router,
    @Inject(DOCUMENT) private doc
  ) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.id = this.route.snapshot.paramMap.get('id');

    this.tagService.getTags().subscribe(
      (tags) => {
        this.tags = tags;
        this.tags.sort((a, b) => this.sortTags(a, b));

        //object for user you are visiting
        this.loadUser();
      },
      (err) => {
        alert(err);
      }
    );
  }

  //refresh from Comment component
  refresh(list: Comment[]) {
    this.commentList = list;
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(this.id).subscribe((user) => {
      this.profile = user;

      if (this.profile['name'] == 'CastError') {
        this.profile = null;
      } else {
        this.loadComments();

        this.hobbies = this.profile.hobbies;

        this.auth.user$.subscribe((profile) => {
          this.profileObject = profile;
          this.userId = this.profileObject.sub.substring(
            6,
            this.profileObject.sub.length
          );

          //object for the visitor
          this.userService.getUser(this.userId).subscribe((user) => {
            this.visitorObject = user;
          });
          this.loadHobbyNames();

          //load user posts, events, comments
          this.loadArrays();
        });
      }
    });
  }
  loadComments() {
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
      this.comments = comments;
      this.commentList = [];
      for (let i = comments.length - 1; i >= 0; i--) {
        if (comments[i].profile === this.id) {
          this.commentList.push(comments[i]);
        }
      }
    });
  }

  //loads user posts, events, comments
  loadArrays() {

    this.postsFromUser=[];
    this.eventsFromUser=[];
    this.eventsUserTracked=[];
    this.commentsFromUser=[];
    this.friendsOfUser=[];

    this.postService.getPosts().subscribe((posts) => {
      for (let i = posts.length - 1; i >= 0; i--) {
        if (posts[i].user === this.profile._id) {
          this.postsFromUser.push(posts[i]);
        }
      }
    });

    this.eventService.getEvents().subscribe((events) => {
      for (let i = events.length - 1; i >= 0; i--) {
        if (events[i].user === this.profile._id) {
          this.eventsFromUser.push(events[i]);
        }
        if (
          events[i].attendees[1].includes(this.profile._id) ||
          events[i].attendees[0].includes(this.profile._id)
        ) {
          this.eventsUserTracked.push(events[i]);
        }
      }

      this.eventsUserTracked.sort((a,b)=>this.sortTrackedEvents(a,b));
    });

    this.commentService.getComments().subscribe((comments) => {
      for (let i = comments.length - 1; i >= 0; i--) {
        if (comments[i].user === this.profile._id) {
          this.commentsFromUser.push(comments[i]);
        }
      }
    });

    this.userService.getUsers().subscribe((users) => {
      for (let i = users.length - 1; i >= 0; i--) {
        if (this.profile.friends['3'].includes(users[i]._id)) {
          this.friendsOfUser.push(users[i]);
        }
      }
    });
  }

  loadHobbyNames() {
    for (let i = 0; i < this.hobbies.length; i++) {
      this.tagService.getTag(this.hobbies[i]).subscribe((hobby) => {
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

  //delete user
  deleteUser(id: String) {

    for (var i = this.commentsFromUser.length - 1; i >= 0; i--) {
      if (this.commentsFromUser[i].user == id) {
        this.commentService.deleteComment(this.commentsFromUser[i]._id).subscribe();
        this.commentsFromUser.splice(i, 1);
      }
    }

    for (var i = this.postsFromUser.length - 1; i >= 0; i--) {
      if (this.postsFromUser[i].user == id) {
        this.postService.deletePost(this.postsFromUser[i]._id).subscribe();
        this.postsFromUser.splice(i, 1);
      }
    }

    for (var i = this.eventsFromUser.length - 1; i >= 0; i--) {
      if (this.eventsFromUser[i].user == id) {
        this.eventService.deleteEvent(this.eventsFromUser[i]._id).subscribe();
        this.eventsFromUser.splice(i, 1);
      }
    }

    this.userService.deleteUser(id).subscribe();
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

  //sort tracked events by number of days left
  sortTrackedEvents(a: Event, b: Event) {

    var tempDate = new Date(a.date_event);
    tempDate.setTime(tempDate.getTime() + -60000*tempDate.getTimezoneOffset());

    var aTime = tempDate.getTime()

    tempDate = new Date(b.date_event);
    tempDate.setTime(tempDate.getTime() + -60000*tempDate.getTimezoneOffset());

    var bTime = tempDate.getTime();

    var aTrack: number = aTime-(new Date()).getTime();
    var bTrack: number = bTime- (new Date()).getTime();

    if(aTrack >0 && bTrack < 0)
    {
      return -1;
    }
    else if(bTrack >0 && aTrack < 0)
    {
      return 1;
    }
    if(aTrack > 0 && bTrack > 0)
    {
      if (aTrack < bTrack) {
        return -1;
      } else if (aTrack > bTrack) {
        return 1;
      } 
    }
    if(aTrack <= 0 && bTrack <= 0)
    {
      if (aTrack < bTrack) {
        return 1;
      } else if (aTrack > bTrack) {
        return -1;
      } 
    }

    else {
      return 0;
    }
  }

  //comment likes code
  likeComment(id: String) {
    this.commentService.getComment(id).subscribe((comment) => {
      this.commentToLike = comment;
      this.commentMap = this.commentToLike.likes;

      //like comment
      if (!this.commentMap['1'].includes(this.userId)) {
        this.commentMap['1'].push(this.userId);

        var link: String = 'profile'; // post, event, or profile
        var userToNotify: String = this.profile._id; //id of owner of post, event or profile
        var idToCommentOn: String = this.id; //id of post, event, or profile

        const newNotification = {
          text: this.visitorObject.username + ' liked your comment. ',
          linkType: link,
          user: userToNotify, //person who created the post/event/profile
          idToLink: idToCommentOn, //post/event/profile id
          date_created: new Date(),
          date_modified: null,
          newNotif: true,
        };

        this.notificationService.addNotification(newNotification).subscribe();
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
              if (comments[i].profile === this.id) {
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
              if (comments[i].profile === this.id) {
                this.commentList.push(comments[i]);
              }
            }
          });
        });
    });
  }

  //modal code
  deleteUserOption(content, id: String) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-post' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.deleteUser(id);

          if(this.visitorObject._id == id)
          {
            this.auth.logout({ returnTo: this.doc.location.origin });
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
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  setOption(number: Number) {
    this.option = number;
  }

  //friend request options
  addFriend() {
    this.visitorObject.friends['1'].push(this.profile._id);

    for (let i = this.visitorObject.friends['2'].length - 1; i >= 0; i--) {
      if (this.visitorObject.friends['2'][i].includes('' + this.profile._id)) {
        this.visitorObject.friends['2'].splice(i, 1);
      }
    }

    for (let i = this.visitorObject.friends['3'].length - 1; i >= 0; i--) {
      if (this.visitorObject.friends['3'][i].includes('' + this.profile._id)) {
        this.visitorObject.friends['3'].splice(i, 1);
      }
    }

    this.userService
      .patchUser(this.visitorObject._id, this.visitorObject)
      .subscribe();

    this.profile.friends['2'].push(this.visitorObject._id);

    for (let i = this.profile.friends['1'].length - 1; i >= 0; i--) {
      if (this.profile.friends['1'][i].includes('' + this.visitorObject._id)) {
        this.profile.friends['1'].splice(i, 1);
      }
    }

    for (let i = this.profile.friends['3'].length - 1; i >= 0; i--) {
      if (this.profile.friends['3'][i].includes('' + this.visitorObject._id)) {
        this.profile.friends['3'].splice(i, 1);
      }
    }

    this.userService.patchUser(this.profile._id, this.profile).subscribe();

    var link: String = 'profile'; // post, event, or profile
    var userToNotify: String = this.profile._id; //id of owner of post, event or profile

    const newNotification = {
      text: this.visitorObject.username + ' sent you a friend request',
      linkType: link,
      user: userToNotify, //person who created the post/event/profile
      idToLink: this.visitorObject._id, //post/event/profile id
      date_created: new Date(),
      date_modified: null,
      newNotif: true,
      isClosed: false,
    };

    this.notificationService.addNotification(newNotification).subscribe();

    this.loadArrays();
  }
  cancelFriend() {
    for (let i = this.visitorObject.friends['1'].length - 1; i >= 0; i--) {
      if (this.visitorObject.friends['1'][i].includes('' + this.profile._id)) {
        this.visitorObject.friends['1'].splice(i, 1);
      }
    }

    for (let i = this.visitorObject.friends['2'].length - 1; i >= 0; i--) {
      if (this.visitorObject.friends['2'][i].includes('' + this.profile._id)) {
        this.visitorObject.friends['2'].splice(i, 1);
      }
    }

    for (let i = this.visitorObject.friends['3'].length - 1; i >= 0; i--) {
      if (this.visitorObject.friends['3'][i].includes('' + this.profile._id)) {
        this.visitorObject.friends['3'].splice(i, 1);
      }
    }

    this.userService
      .patchUser(this.visitorObject._id, this.visitorObject)
      .subscribe();

    for (let i = this.profile.friends['1'].length - 1; i >= 0; i--) {
      if (this.profile.friends['1'][i].includes('' + this.visitorObject._id)) {
        this.profile.friends['1'].splice(i, 1);
      }
    }

    for (let i = this.profile.friends['2'].length - 1; i >= 0; i--) {
      if (this.profile.friends['2'][i].includes('' + this.visitorObject._id)) {
        this.profile.friends['2'].splice(i, 1);
      }
    }

    for (let i = this.profile.friends['3'].length - 1; i >= 0; i--) {
      if (this.profile.friends['3'][i].includes('' + this.visitorObject._id)) {
        this.profile.friends['3'].splice(i, 1);
      }
    }

    this.userService.patchUser(this.profile._id, this.profile).subscribe();

    this.loadArrays();
  }

  acceptFriend() {
    this.visitorObject.friends['3'].push(this.profile._id);

    for (let i = this.visitorObject.friends['2'].length - 1; i >= 0; i--) {
      if (this.visitorObject.friends['2'][i].includes('' + this.profile._id)) {
        this.visitorObject.friends['2'].splice(i, 1);
      }
    }

    for (let i = this.visitorObject.friends['1'].length - 1; i >= 0; i--) {
      if (this.visitorObject.friends['1'][i].includes('' + this.profile._id)) {
        this.visitorObject.friends['1'].splice(i, 1);
      }
    }

    this.userService
      .patchUser(this.visitorObject._id, this.visitorObject)
      .subscribe();

    this.profile.friends['3'].push(this.visitorObject._id);

    for (let i = this.profile.friends['1'].length - 1; i >= 0; i--) {
      if (this.profile.friends['1'][i].includes('' + this.visitorObject._id)) {
        this.profile.friends['1'].splice(i, 1);
      }
    }

    for (let i = this.profile.friends['2'].length - 1; i >= 0; i--) {
      if (this.profile.friends['2'][i].includes('' + this.visitorObject._id)) {
        this.profile.friends['2'].splice(i, 1);
      }
    }

    this.userService.patchUser(this.profile._id, this.profile).subscribe();

    var link: String = 'profile'; // post, event, or profile
    var userToNotify: String = this.profile._id; //id of owner of post, event or profile

    const newNotification = {
      text: this.visitorObject.username + ' accepted your friend request',
      linkType: link,
      user: userToNotify, //person who created the post/event/profile
      idToLink: this.visitorObject._id, //post/event/profile id
      date_created: new Date(),
      date_modified: null,
      newNotif: true,
      isClosed: false,
    };

    this.notificationService.addNotification(newNotification).subscribe();

    this.loadArrays();
  }

  prev1()
  {
    if(this.ind1 > 0)
    {
      this.ind1 = this.ind1 - 10;
    }
  }

  next1()
  {
    if(this.ind1 +10< this.postsFromUser.length)
    {
      this.ind1 = this.ind1 + 10;
    }
  }

  prev2()
  {
    if(this.ind2 > 0)
    {
      this.ind2 = this.ind2 - 10;
    }
  }

  next2()
  {
    if(this.ind2+10 < this.eventsFromUser.length)
    {
      this.ind2 = this.ind2 + 10;
    }
  }

  prev3()
  {
    if(this.ind3 > 0)
    {
      this.ind3 = this.ind3 - 10;
    }
  }

  next3()
  {
    if(this.ind3+10  < this.commentsFromUser.length)
    {
      this.ind3 = this.ind3 + 10;
    }
  }

  prev4()
  {
    if(this.ind4 > 0)
    {
      this.ind4 = this.ind4 - 10;
    }
  }

  next4()
  {
    if(this.ind4 +10 < this.eventsUserTracked.length)
    {
      this.ind4 = this.ind4 + 10;
    }
  }

  prev5()
  {
    if(this.ind5 > 0)
    {
      this.ind5 = this.ind5 - 10;
    }
  }

  next5()
  {
    if(this.ind5 +10 < this.friendsOfUser.length)
    {
      this.ind5 = this.ind5 + 10;
    }
  }
}
