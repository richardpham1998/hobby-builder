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

   

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute
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



}
