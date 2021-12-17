import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';
import { UserService } from '../../../../../frontend/src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  eventForm: FormGroup;

  profileObject: any = null;

  userName: String;

  added: boolean = false;

  blankTitle:Boolean = false;
  blankDescription:Boolean = false;
  blankLocation:Boolean = false;
  blankDate:Boolean = false;

  constructor(
    private eventService: EventService,
    public auth: AuthService,
    private modalService: NgbModal,
    private userService: UserService,
    private fb: FormBuilder
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
          this.userName = profile.username;
        });
    });

    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      date_event: ['', Validators.required]
    });
  }

  onSubmit() {
    if(!this.eventForm.valid)
    {
      if(this.eventForm.value.title === '')
      {
        this.blankTitle = true;
      }
      else
      {
        this.blankTitle=false;
      }

      if(this.eventForm.value.description === '')
      {
        this.blankDescription = true;
      }
      else{
        this.blankDescription=false;
      }

      if(this.eventForm.value.location === '')
      {
        this.blankLocation = true;
      }
      else
      {
        this.blankLocation=false;
      }

      if(this.eventForm.value.date_event === '')
      {
        this.blankDate = true;
      }
      else
      {
        this.blankDate=false;
      }
    }
    else
    {

      this.blankTitle=false;
      this.blankDescription=false;
      this.blankLocation=false;
      this.blankDate=false;
    
    this.userId = this.profileObject.sub.substring(
      6,
      this.profileObject.sub.length
    );

    const newEvent = {
      title: this.eventForm.value.title,
      likes: { '-1': [], '0': [], '1': [] },
      user: this.userId,
      tags: this.tags,
      author: this.userName,
      description: this.eventForm.value.description,
      location: this.eventForm.value.location,
      comments: [],
      attendees: { '-1': [], '0': [], '1': [] },
      hosts: [],
      date_event: this.eventForm.value.date_event,
      date_created: new Date(),
      date_modified: null,
      image: this.image,
    };

    this.eventService.addEvent(newEvent).subscribe((event) => {
      this.added = true;
    });

  }
}
}
