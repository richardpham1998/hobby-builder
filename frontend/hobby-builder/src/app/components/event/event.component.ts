import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { Comment } from '../../models/comment';
import { Tag } from '../../models/tag';
import { EventService } from '../../services/event.service';
import { AuthService } from '@auth0/auth0-angular';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  event: Event = null;
  id: String = null;

  userName: String;

  //event components
  events: Event[] = [];
  comments: Comment[] = [];
  title: String = null;
  likes: { '-1': String[]; '0': String[]; '1': String[] };
  attendees: { '-1': String[]; '0': String[]; '1': String[] };
  userId: String = null;
  author: String = null;
  description: String = '';
  event_comments: String[] = [];
  tags: String[] = [];
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;
  blankTitle: boolean = false;
  blankDescription: boolean = false;
  editEvent: boolean = false;

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
  eventToDelete: String = null;
  commentToDelete: String = null;

  //user component
  userObject: User;

  //profile substring
  profileSubstring: String;

  //view options
  option: Number = 1;

  //user attendees;
  usersAttending: User[]=[];
  usersMayAttend: User[]=[];

  constructor(
    private eventService: EventService,
    public auth: AuthService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private tagService: TagService,
    private modalService: NgbModal,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.loadEvent();

    this.eventService.getEvents().subscribe((events) => {
      
      this.events = events;
    
      this.loadUserArrays();
    });

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

  loadEvent() {
    this.eventService.getEvent(this.id).subscribe((event) => {
      this.event = event;
      this.attendees = this.event.attendees;
      this.likes = this.event.likes;
      if (this.event['name'] == 'CastError') {
        this.event = null;
      } else {
        this.tags = this.event.tags;
        this.tagService.getTags().subscribe((tags) => {
          this.tagOptions = tags;
          this.tagOptions.sort((a, b) => this.sortTags(a, b));
          this.loadHobbyNames();
        });

        this.commentService.getComments().subscribe((comments) => {
          this.comments = comments;
          this.commentList = [];
          for (let i = comments.length - 1; i >= 0; i--) {
            if (comments[i].event === this.event._id) {
              this.commentList.push(comments[i]);
            }
          }
        });
      }
    });
  }

  //delete event
  deleteEvent(id: any) {
    var events = this.events;
    this.eventService.deleteEvent(id).subscribe((data) => {
      for (var i = 0; i < events.length; i++) {
        if (events[i]._id == id) {
          events.splice(i, 1);
        }
      }

      for (var i = this.comments.length - 1; i >= 0; i--) {
        if (this.comments[i].event == id) {
          this.commentService.deleteComment(this.comments[i]._id).subscribe();
          this.comments.splice(i, 1);
        }
      }

      this.eventService.getEvent(this.id).subscribe((event) => {
        this.event = event;
        if (this.event['name'] == 'CastError') {
          this.event = null;
        }
      });
    });
  }

  //event join methods
  goingEvent(id: String) {
    //add user to correct event attendee category
    if (!this.attendees['1'].includes(this.userId)) {
      this.event.attendees['1'].push(this.userId);

      var link: String = 'event'; // post, event, or profile
      var userToNotify: String = this.event.user; //id of owner of post, event or profile
      var idToCommentOn: String = this.id; //id of post, event, or profile

      const newNotification = {
        text: this.userName + ' is going to your ' + link + '.',
        linkType: link,
        user: userToNotify, //person who created the post/event/profile
        idToLink: idToCommentOn, //post/event/profile id
        date_created: new Date(),
        date_modified: null,
      };

      this.notificationService.addNotification(newNotification).subscribe();
    }
    //remove user from category
    else {
      for (let i = this.event.attendees['1'].length - 1; i >= 0; i--) {
        if (this.event.attendees['1'][i] === this.userId) {
          this.event.attendees['1'].splice(i, 1);
        }
      }
    }

    //remove user from other event attendee category
    for (let i = this.event.attendees['-1'].length - 1; i >= 0; i--) {
      if (this.event.attendees['-1'][i] === this.userId) {
        this.event.attendees['-1'].splice(i, 1);
      }
    }
    for (let i = this.event.attendees['0'].length - 1; i >= 0; i--) {
      if (this.event.attendees['0'][i] === this.userId) {
        this.event.attendees['0'].splice(i, 1);
      }
    }

    this.event.attendees = this.attendees;
    this.eventService.patchEvent(id, this.event).subscribe();

    this.loadUserArrays();

  }

  maybeEvent(id: String) {
    //add user to correct event attendee category
    if (!this.attendees['0'].includes(this.userId)) {
      this.event.attendees['0'].push(this.userId);

      var link: String = 'event'; // post, event, or profile
      var userToNotify: String = this.event.user; //id of owner of post, event or profile
      var idToCommentOn: String = this.id; //id of post, event, or profile

      const newNotification = {
        text: this.userName + ' might go to your ' + link + '.',
        linkType: link,
        user: userToNotify, //person who created the post/event/profile
        idToLink: idToCommentOn, //post/event/profile id
        date_created: new Date(),
        date_modified: null,
      };

      this.notificationService.addNotification(newNotification).subscribe();
    }
    //remove user from category
    else {
      for (let i = this.event.attendees['0'].length - 1; i >= 0; i--) {
        if (this.event.attendees['0'][i] === this.userId) {
          this.event.attendees['0'].splice(i, 1);
        }
      }
    }

    //remove user from other event attendee category
    for (let i = this.event.attendees['-1'].length - 1; i >= 0; i--) {
      if (this.event.attendees['-1'][i] === this.userId) {
        this.event.attendees['-1'].splice(i, 1);
      }
    }
    for (let i = this.event.attendees['1'].length - 1; i >= 0; i--) {
      if (this.event.attendees['1'][i] === this.userId) {
        this.event.attendees['1'].splice(i, 1);
      }
    }

    this.event.attendees = this.attendees;
    this.eventService.patchEvent(id, this.event).subscribe();

    this.loadUserArrays();
  }

  notGoingEvent(id: String) {
    //add user to correct event attendee category
    if (!this.attendees['-1'].includes(this.userId)) {
      this.event.attendees['-1'].push(this.userId);
    }
    //remove user from category
    else {
      for (let i = this.event.attendees['-1'].length - 1; i >= 0; i--) {
        if (this.event.attendees['-1'][i] === this.userId) {
          this.event.attendees['-1'].splice(i, 1);
        }
      }
    }

    //remove user from other event attendee category
    for (let i = this.event.attendees['1'].length - 1; i >= 0; i--) {
      if (this.event.attendees['1'][i] === this.userId) {
        this.event.attendees['1'].splice(i, 1);
      }
    }
    for (let i = this.event.attendees['0'].length - 1; i >= 0; i--) {
      if (this.event.attendees['0'][i] === this.userId) {
        this.event.attendees['0'].splice(i, 1);
      }
    }

    this.event.attendees = this.attendees;
    this.eventService.patchEvent(id, this.event).subscribe();

    this.loadUserArrays();
  }

  //event like methods
  likeEvent(id: String) {

    this.likes = this.event.likes;

    //like comment
    if (!this.likes['1'].includes(this.userId)) {
      this.likes['1'].push(this.userId);

      var link: String = 'event'; // post, event, or profile
      var userToNotify: String = this.event.user; //id of owner of post, event or profile
      var idToCommentOn: String = this.id; //id of post, event, or profile

      const newNotification = {
        text: this.userName + ' liked your ' + link + '.',
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

    this.event.likes = this.likes;

    this.eventService.patchEvent(id, this.event).subscribe();
  }

  dislikeEvent(id: String) {

    this.likes = this.event.likes;

    this.eventService.getEvent(id).subscribe((event) => {
      this.event = event;
      this.likes = this.event.likes;

      //dislike event
      if (!this.likes['-1'].includes(this.userId)) {
        this.likes['-1'].push(this.userId);
      }
      //un-dislike event
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

      this.event.likes = this.likes;

      this.eventService.patchEvent(id, this.event).subscribe();
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

      this.eventService.patchEvent(this.id, this.event).subscribe((event) => {
        this.eventService.getEvent(this.id).subscribe((event) => {
          this.event = event;
          this.tags = this.event.tags;
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

    this.eventService.patchEvent(this.id, this.event).subscribe((event) => {
      this.eventService.getEvent(this.id).subscribe((event) => {
        this.event = event;
        this.tags = this.event.tags;
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

        var link: String = 'event'; // post, event, or profile
        var userToNotify: String = this.event.user; //id of owner of post, event or profile
        var idToCommentOn: String = this.id; //id of post, event, or profile

        const newNotification = {
          text: this.userName + ' liked your ' + link + '.',
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
              if (comments[i].event === this.event._id) {
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
              if (comments[i].event === this.event._id) {
                this.commentList.push(comments[i]);
              }
            }
          });
        });
    });
  }

  //modal code
  openEvent(content, id: String) {
    this.eventToDelete = id;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-event' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          if (this.eventToDelete != null) {
            this.deleteEvent(this.eventToDelete);
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
    this.eventToDelete = null;
    this.commentToDelete = null;

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private setOption(val: Number) {
    this.option = val;
  }

  //gets list of attendees
  private loadUserArrays()
  {
    this.usersAttending=[];
    this.usersMayAttend=[];
    this.userService.getUsers().subscribe((users) => {
      for (let i = 0; i < users.length; i++) {
        if(this.event.attendees['1'].includes(users[i]._id))
        {
          this.usersAttending.push(users[i]);
        }
        else if(this.event.attendees['0'].includes(users[i]._id))
        {
          this.usersMayAttend.push(users[i]);
        }
      }
    });
  }
}
