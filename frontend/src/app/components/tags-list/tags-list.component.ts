import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {
    //input array
    @Input() tags: String[];

      //tag components
  tagOptions: Tag[] = [];
  tagId: String = null;
  hobbyNames: String[] = [];
  hobbyObject: Tag;

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.getTags().subscribe((tags) => {
      this.tagOptions = tags;
      this.tagOptions.sort((a, b) => this.sortTags(a, b));
      this.loadHobbyNames();
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


}
