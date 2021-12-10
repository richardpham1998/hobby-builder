import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
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

  edited: boolean = false;

  eventForm: FormGroup;

  blankTitle:Boolean = false;
  blankDescription:Boolean = false;
  blankLocation:Boolean = false;
  blankDate:Boolean = false;


  //input array
  tags: String[] = [];

  constructor(
    private eventService: EventService,
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private fb:FormBuilder
  ) {}

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
        if (event != null) {

          this.event = event;

          this.eventForm =this.fb.group({
            title:['', Validators.required],
            description:['', Validators.required],
            location:['', Validators.required],
            date_event:['', Validators.required],
          });


          var tempDate = new Date(event.date_event);

          tempDate.setTime(tempDate.getTime() + -60000*tempDate.getTimezoneOffset());
          

          this.eventForm.setValue({title: event.title, description: event.description, location: event.location, date_event: tempDate.toISOString().slice(0,16)});
      
          this.tags = this.event.tags;
        }
      });
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

    
      this.event.title = this.eventForm.value.title;
      this.event.description = this.eventForm.value.description;
      this.event.location = this.eventForm.value.location;
      this.event.date_event = this.eventForm.value.date_event;

      this.eventService.patchEvent(this.id, this.event).subscribe((event) => {
        this.edited = true;
      });

    
  }
}
}
