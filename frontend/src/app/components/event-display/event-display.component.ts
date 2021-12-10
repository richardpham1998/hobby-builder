import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Event} from '../../models/event';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
