import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {

  profileObject: any;
  userId: String;

  userObject: User;


  constructor(public auth : AuthService, private userService : UserService) { }

  ngOnInit(): void {

    this.auth.user$.subscribe((profile)=>{
      this.profileObject = profile;
      this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);

      if(this.userId != null)
      {
        this.userService.getUser(this.userId).subscribe(user=>
          {
            this.userObject=user;
          })

      }


    });

  }

}
