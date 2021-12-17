import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Tag } from '../../../../../frontend/src/app/models/tag';
import { User } from '../../../../../frontend/src/app/models/user';
import { PostService } from '../../../../../frontend/src/app/services/post.service';
import { TagService } from '../../../../../frontend/src/app/services/tag.service';
import { UserService } from '../../../../../frontend/src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  visitorObject: User = null;
  userObject: User = null;

  id: String;

  userId: String = null;
  biography: String = null;
  city: String = null;
  province: String = null;
  country: String = '';

  profileObject: any = null;

  edited: boolean = false;

  profileForm: FormGroup;

  //input array
  tags: String[] = [];

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

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
        .subscribe((user) => (this.visitorObject = user));

      this.userService.getUser(this.id).subscribe((user) => {
        if(user != null && user['name'] !== "CastError")
        {

          this.profileForm =this.fb.group({
            biography:[''],
            city:[''],
            province:[''],
            country:[''],
          });

          
          this.userObject = user;
          this.profileForm.setValue({biography: user.biography, city: user.city, province: user.province, country: user.country});
          this.tags = user.hobbies;
        }
      });

    });
  }

  onSubmit() {
    this.userObject.biography = this.profileForm.value.biography;
    this.userObject.city = this.profileForm.value.city;
    this.userObject.province = this.profileForm.value.province;
    this.userObject.country = this.profileForm.value.country;
    this.userObject.hobbies = this.tags;

    this.userService.patchUser(this.id, this.userObject).subscribe((user) => {
      this.edited = true;
    });
  }
}
