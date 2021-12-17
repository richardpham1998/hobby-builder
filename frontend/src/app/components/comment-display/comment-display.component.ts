import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../../../../frontend/src/app/models/comment';

@Component({
  selector: 'app-comment-display',
  templateUrl: './comment-display.component.html',
  styleUrls: ['./comment-display.component.css']
})
export class CommentDisplayComponent implements OnInit {

  @Input() comment: Comment;
  constructor() { }

  ngOnInit(): void {
  }

}
