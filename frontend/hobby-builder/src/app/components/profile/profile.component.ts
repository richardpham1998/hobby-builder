import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { TagService } from 'src/app/services/tag.service';
import { User } from '../../models/user';
import { Tag } from '../../models/tag';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileJson: String = null;

  id: String;

  profile: User = null;
  email: String = null;
  hobbies: String[] =[];
  hobbyNames: String[] = [];

  hobby:String=null;

  profileObject: any = null;

  userId: String;

  tags : Tag[] = [];
  tagId: String = null;

  hobbyObject: Tag;
  hobbyExists:Boolean = false;

  constructor(public auth: AuthService, private route: ActivatedRoute, private userService: UserService, private tagService: TagService) {

   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    this.tagService.getTags().subscribe(tags=>{
      this.tags=tags;
      this.tags.sort((a,b)=>this.sortTags(a,b));

      this.userService.getUser(this.id).subscribe(
        user=>{
          this.profile=user;

        if(this.profile["name"]=="CastError")
        {
          this.profile = null;
        }
         else{
            this.hobbies = this.profile.hobbies;
  
            this.auth.user$.subscribe((profile)=>{
              this.profileObject = profile;
              this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);
              this.loadHobbyNames();
            });
          }
          
        });
    },
    err=>{alert(err)});
    
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

  loadHobbyNames()
  {
    for(let i = 0; i < this.hobbies.length;i++)
    {
      this.tagService.getTag(this.hobbies[i]).subscribe(hobby=>
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
      this.hobbyExists = false;
    }
    if(this.hobbies.includes(this.tagId))
    {
      this.hobbyExists = true;
    }
    else{
      this.hobbyExists = false;
      this.hobbies.push(this.tagId);

      this.userService.patchUser(this.userId,this.profile).subscribe(user=>
        { this.profile=user;
          this.userService.getUser(this.userId).subscribe(user=>{
            this.profile=user;
            this.hobbies = this.profile.hobbies;});
            this.loadHobbyNames();
        }
      );

      this.tagId = null;

    }
  }

  deleteHobby(hobby: String)
  {
    for(var i = 0; i < this.hobbies.length; i++)
    {
      if(this.hobbies[i] == hobby)
      {
        this.hobbies.splice(i,1);
        this.hobbyNames.splice(i,1);
      }
    }

    this.userService.patchUser(this.userId,this.profile).subscribe(user=>
      { this.profile=user;
        this.userService.getUser(this.userId).subscribe(user=>{
          this.profile=user;
          this.hobbies = this.profile.hobbies;});
          this.loadHobbyNames();
      }
    );
    
  }

}
