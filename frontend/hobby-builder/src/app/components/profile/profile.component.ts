import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../../models/user';
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

  constructor(public auth: AuthService, private route: ActivatedRoute, private userService: UserService) {

   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    this.userService.getUser(this.id).subscribe(
      user=>{
        this.profile=user;
      });

  }

}
