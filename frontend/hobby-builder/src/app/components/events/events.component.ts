import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Tag } from 'src/app/models/tag';
import { EventService } from 'src/app/services/event.service';
import { TagService } from 'src/app/services/tag.service';
import {Event} from '../../models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  //event components
  events: Event[] = [];
  eventsCopy: Event[] = [];
  profileObject: any = null;

  title: String = null;
  author: String = null;

  mostRecent: String = null;

  tags: String[] = [];



  constructor(
    private eventService: EventService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;

      //get most recent events
      for (let i = 0; i < this.events.length; i++) {
        this.eventsCopy[i] = this.events[this.events.length - 1 - i];
      }
    });


    this.auth.user$.subscribe((profile) => (this.profileObject = profile));
  }

  search(): void {

    //filter based on title
    if (this.title == null || this.title.trim() == '') {
      //get most recent events
      for (let i = 0; i < this.events.length; i++) {
        this.eventsCopy[i] = this.events[this.events.length - 1 - i];
      }
    } else {
      this.eventsCopy = [];

      for (let i = 0; i < this.events.length; i++) {
        if (
          this.events[i].title.toLowerCase().includes(this.title.toLowerCase())
        ) {
          this.eventsCopy[i] = this.events[i];
        }
      }
    }

    //filter based on author
     if (!(this.author == null || this.author.trim() == '')) {
      for (let i = this.eventsCopy.length-1; i >= 0; i--) {
        if (
          !this.eventsCopy[i].author
            .toLowerCase()
            .includes(this.author.toLowerCase())
        ) {
          this.eventsCopy.splice(i,1);
        }
      }
     }

    //filter based on tags
    this.checkTags();
  }

  //check if search contains all the tags
  checkTags() {
    for (let i = this.eventsCopy.length - 1; i >= 0; i--) {
      var remove = 0;

      for (let j = 0; j < this.tags.length; j++) {
        if (!this.eventsCopy[i].tags.includes(this.tags[j])) {
          remove = 1;
        }
      }
      if (remove == 1) {
        this.eventsCopy.splice(i, 1);
      }
    }
  }
}
