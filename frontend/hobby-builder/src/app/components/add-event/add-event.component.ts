import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';
import { UserService } from 'src/app/services/user.service';
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
    this.userId = this.profileObject.sub.substring(
      6,
      this.profileObject.sub.length
    );

    const newEvent = {
      title: this.eventForm.value.title,
      likes: { '-1': [], '0': [], '1': [] },
      user: this.userId,
      tags: this.tags,
      author: this.profileObject.nickname,
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
