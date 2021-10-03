import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {

  profileJson: String = null;

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((profile)=>(this.profileJson = JSON.stringify(profile,null,2)))
  }

}
