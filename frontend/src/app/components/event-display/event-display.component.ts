import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Event} from '../../models/event';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {

  @Input() event: Event;
  @Input() trackDays: Boolean

  numDays : number = 0;

  constructor() { }

  ngOnInit(): void {

    if(this.trackDays == true)
    {
      this.calculateDaysLeft();
    }
  }

  calculateDaysLeft()
  {
    var tempDate = new Date(this.event.date_event);
    tempDate.setTime(tempDate.getTime() + -60000*tempDate.getTimezoneOffset());

    var aTime = tempDate.getTime();

    this.numDays = aTime- (new Date()).getTime();
  }

  

}
