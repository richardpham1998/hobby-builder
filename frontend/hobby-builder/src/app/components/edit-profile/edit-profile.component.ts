import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Tag } from 'src/app/models/tag';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { TagService } from 'src/app/services/tag.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userObject: User;

  id: String;

  userId : String = null;
  biography: String = null;
  city: String = null;
  province: String = null;
  country: String = '';

  profileObject: any = null;

  edited: boolean = false;

   //input array
   tags : String[] = [];

   //tag components
   tagOptions: Tag[]= [];
   tagId: String = null;
   hobbyNames: String[] = [];
   hobbyObject: Tag;
   hobbyExists: boolean = false;

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private tagService: TagService
  ) {

  }

  ngOnInit(): void {
    //actual post id
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

      this.userService.getUser(this.id).subscribe((user) => {
        this.biography=user.biography;
        this.city=user.city;
        this.province=user.province;
        this.country=user.country;
        this.tags=user.hobbies;

        this.tagService.getTags().subscribe(tags=>
          {
            this.tagOptions=tags;
            this.loadHobbyNames();
          }
          );
      });
    });
  }

  editProfile() {

    this.userObject.biography=this.biography;
    this.userObject.city=this.city;
    this.userObject.province=this.province;
    this.userObject.country=this.country;
    this.userObject.hobbies=this.tags;


      this.userService.patchUser(this.id, this.userObject).subscribe((user) => {
        this.edited = true;
      });

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
