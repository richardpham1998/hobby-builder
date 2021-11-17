import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Event } from 'src/app/models/event';
import { Tag } from 'src/app/models/tag';
import { User } from 'src/app/models/user';
import { EventService } from 'src/app/services/event.service';
import { TagService } from 'src/app/services/tag.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  userObject: User;
  event: Event;

  id: String;

  title: String = null;
  userId: String = null;
  author: String = null;
  description: String = '';
  location: String = '';
  date_event: Date = null;
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;

  blankTitle: boolean = false;
  blankDescription: boolean = false;
  blankLocation: boolean = false;
  edited: boolean = false;

   //input array
   tags : String[] = [];


  constructor(
    private eventService: EventService,
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    //actual event id
    this.id = this.route.snapshot.paramMap.get('id');

    this.auth.user$.subscribe((profile) => {
      this.profileObject = profile;
      this.userId = this.profileObject.sub.substring(
        6,
        this.profileObject.sub.length
      );
      this.userService
        .getUser(this.userId)
        .subscribe((user) => (this.userObject = user));

      this.eventService.getEvent(this.id).subscribe((event) => {
        this.event = event;
        this.title = this.event.title;
        this.author = this.event.author;
        this.tags = this.event.tags;
        this.description = this.event.description;
        this.location = this.event.location;
        this.date_event=this.event.date_event;
        this.date_created = this.event.date_created;
        this.date_modified = this.event.date_modified;

        
      });
    });
  }

  editEvent() {
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
      this.title == null ||
      this.title == '' ||
      this.description == null ||
      this.description == ''||
      this.location == null ||
      this.location == ''
    ) {
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

      this.edited = false;
    } else {
      this.event.title = this.title;
      this.event.description = this.description;
      this.event.location = this.location;
      this.event.date_event = this.date_event;


      this.eventService.patchEvent(this.id, this.event).subscribe((event) => {
        this.edited = true;
      });

      this.blankTitle = false;
      this.blankDescription = false;
    }
  }

 

}
