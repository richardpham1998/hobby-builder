import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';
import { UserService } from 'src/app/services/user.service';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  events: Event[] = [];
  title: String;
  userId: String;
  tags: String[] = [];
  author: String;
  description: String;
  location: String;
  comments: String[];
  attendees: String[];
  hosts: String[];
  date_event: Date;
  date_created: Date;
  date_modified: Date;
  image: String;

  profileObject: any = null;

  blankDate: boolean = false;
  blankTitle: boolean = false;
  blankDescription: boolean = false;
  blankLocation: boolean = false;

  userName: String;

  added: boolean = false;

  //tag components
  tagOptions: Tag[] = [];
  tagId: String = null;
  hobbyNames: String[] = [];
  hobbyObject: Tag;
  hobbyExists: boolean = false;

  constructor(
    private eventService: EventService,
    public auth: AuthService,
    private modalService: NgbModal,
    private userService: UserService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => (this.events = events));
    this.auth.user$.subscribe((profile) => {
      this.profileObject = profile;

      this.userService
        .getUser(
          this.profileObject.sub.substring(6, this.profileObject.sub.length)
        )
        .subscribe((profile) => {
          console.log(profile);
          this.userName = profile.username;
        });
    });

    this.tagService.getTags().subscribe(tags=>
      {
        this.tagOptions=tags;
        this.loadHobbyNames();
      }
      );
  }

  addEvent() {
    this.userId = this.profileObject.sub.substring(
      6,
      this.profileObject.sub.length
    );

    if (this.title != null) {
      this.title.trim;
    }

    if (this.description != null) {
      this.description.trim;
    }

    if (this.location != null) {
      this.location.trim;
    }

    if (
      this.date_event == null ||
      this.title == null ||
      this.title == '' ||
      this.description == null ||
      this.description == '' ||
      this.location == null ||
      this.location == ''
    ) {
      if (this.date_event == null) {
        this.blankDate = true;
      } else {
        this.blankDate = false;
      }
      if (this.title == null || this.title == '') {
        this.blankTitle = true;
      } else {
        this.blankTitle = false;
      }
      if (this.description == null || this.description == '') {
        this.blankDescription = true;
      } else {
        this.blankDescription = false;
      }

      if (this.location == null || this.location == '') {
        this.blankLocation = true;
      } else {
        this.blankLocation = false;
      }

      this.added = false;
    } else {
      const newEvent = {
        title: this.title,
        likes: { '-1': [], '0': [], '1': [] },
        user: this.userId,
        tags: this.tags,
        author: this.profileObject.nickname,
        description: this.description,
        location: this.location,
        comments: [],
        attendees: { '-1': [], '0': [], '1': [] },
        hosts: [],
        date_event: this.date_event,
        date_created: new Date(),
        date_modified: null,
        image: this.image,
      };


      this.eventService.addEvent(newEvent).subscribe((event) => {
        this.events.push(event);
        this.added = true;
      });

      this.blankDate = false;
      this.blankTitle = false;
      this.blankDescription = false;
      this.blankLocation = false;

      this.title = null;
      this.userId = null;
      this.tags = [];
      this.description = '';
      this.location = '';
      this.date_event = null;
      this.image = null;
      this.date_created = null;
      this.date_modified = null;

      this.hobbyNames=[];
    }

    this.eventService.getEvents().subscribe((events) => (this.events = events));
  }

     //tag methods

     sortTags(a : Tag, b: Tag)
     {
         if(a.name>b.name)
         {
           return 1;
         }
         else if(a.name<b.name)
         {
           return -1;
         }
         else{
           return 0;
         }
     }

     loadHobbyNames()
     {
       for(let i = 0; i < this.tags.length;i++)
       {
         this.tagService.getTag(this.tags[i]).subscribe(hobby=>
           {
             this.hobbyObject = hobby;
             if(this.hobbyObject==null)
             {
               this.hobbyNames[i]=null;
             }
             else{
               this.hobbyNames[i]=this.hobbyObject.name;
             }
             
           });
         
       }
       this.hobbyObject=null;
     }
   
     addHobby()
     {

       if(this.tagId==null)
       {
         this.hobbyExists=false;
       }
       else if(this.tags.includes(this.tagId))
       {
         this.hobbyExists=true;
       }
       else{
         this.hobbyExists=false;
         this.tags.push(this.tagId);
         this.tagId = null;
   
       }
       this.loadHobbyNames();
     }
   
     deleteHobby(hobby: String)
     {
       for(var i = 0; i < this.tags.length; i++)
       {
         if(this.tags[i] == hobby)
         {
           this.tags.splice(i,1);
           this.hobbyNames.splice(i,1);
         }
       }
       this.loadHobbyNames();
     }
}
