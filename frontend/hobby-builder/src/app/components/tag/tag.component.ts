import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {TagService} from '../../services/tag.service';
import {Tag} from '../../models/tag';
import {User} from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tags : Tag[] = [];
  tag : Tag = null;
  name : String = null;
  
  blankName : Boolean = false;

  userId : String = null;
  userObject : User = null;
  profileObject : any = null;

  constructor(private tagService: TagService, http : HttpClientModule, private userService : UserService, public auth : AuthService) {}

  ngOnInit(): void {

    this.auth.user$.subscribe((profile)=>{
      this.profileObject = profile;
      this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);

      this.userService.getUser(this.userId).subscribe(user=>
        this.userObject=user);
    });


    this.tagService.getTags().subscribe(tags=>{
      this.tags = tags;
      this.tags.sort((a,b)=>this.sortTags(a,b));});
  }

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

  addTag()
  {
    if(this.name != null)
    {
      this.name.trim;
    }

    if(this.name==null || this.name== "")
    {
      this.blankName = true;
    }
    else{
      const newTag = 
      {
        name: this.name
      }
      this.name = null;
  
      this.blankName = false;
      this.tagService.addTag(newTag).subscribe(tag=>
        { this.tags.push(tag);
          this.tagService.getTags().subscribe(tags=>{
            this.tags=tags;
            this.tags.sort((a,b)=>this.sortTags(a,b));
          });
        });
      
    }
  }

  deleteTag(id:any)
  {
    var tags = this.tags;
    this.tagService.deleteTag(id)
    .subscribe(data=>
     {

       for(var i = 0; i < tags.length; i++)
       {
         if(tags[i]._id == id)
         {
           tags.splice(i,1);
         }
       }

       this.tagService.getTags().subscribe(tags=>{
         this.tags=tags;
        this.tags.sort((a,b)=>this.sortTags(a,b));
      });
     
     });
  }

}
