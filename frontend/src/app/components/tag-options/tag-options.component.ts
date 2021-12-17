import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Tag } from '../../../../../frontend/src/app/models/tag';
import { TagService } from '../../../../../frontend/src/app/services/tag.service';
import { UserService } from '../../../../../frontend/src/app/services/user.service';

@Component({
  selector: 'app-tag-options',
  templateUrl: './tag-options.component.html',
  styleUrls: ['./tag-options.component.css'],
})
export class TagOptionsComponent implements OnInit {
  //input array
  @Input() tags: String[];


  //tag components
  tagOptions: Tag[] = [];
  tagId: String = null;
  hobbyNames: String[] = [];
  hobbyObject: Tag;
  hobbyExists: boolean = false;

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    this.tagService.getTags().subscribe(tags=>
      {
        this.tagOptions=tags;
        this.tagOptions.sort((a, b) => this.sortTags(a, b));
        this.loadHobbyNames();
      }
      );
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
