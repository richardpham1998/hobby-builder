import { ThrowStmt } from '@angular/compiler';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { TagService } from 'src/app/services/tag.service';
import { User } from '../../models/user';
import { Tag } from '../../models/tag';
import { UserService } from '../../services/user.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileJson: String = null;

  id: String;

  //from UserService
  profile: User = null;
  email: String = null;
  hobbies: String[] = [];
  hobbyNames: String[] = [];

  hobby: String = null;

  //Auth0
  profileObject: any = null;

  userId: String;

  tags: Tag[] = [];
  tagId: String = null;

  hobbyObject: Tag;
  hobbyExists: Boolean = false;

  //modal components
  closeResult = '';

  constructor(
    public auth: AuthService,
    private route: ActivatedRoute,
    private userService: UserService,
    private tagService: TagService,
    private modalService: NgbModal,
    @Inject(DOCUMENT) private doc
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.tagService.getTags().subscribe(
      (tags) => {
        this.tags = tags;
        this.tags.sort((a, b) => this.sortTags(a, b));

        this.userService.getUser(this.id).subscribe((user) => {
          this.profile = user;

          if (this.profile['name'] == 'CastError') {
            this.profile = null;
          } else {
            this.hobbies = this.profile.hobbies;

            this.auth.user$.subscribe((profile) => {
              this.profileObject = profile;
              this.userId = this.profileObject.sub.substring(
                6,
                this.profileObject.sub.length
              );
              this.loadHobbyNames();
              console.log(this.profile)
            });
          }
        });
      },
      (err) => {
        alert(err);
      }
    );
  }

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
    for (let i = 0; i < this.hobbies.length; i++) {
      this.tagService.getTag(this.hobbies[i]).subscribe((hobby) => {
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

  //delete user
  deleteUser(id : String)
  {
    this.userService.deleteUser(id).subscribe();
  }

  //modal code
  deleteUserOption(content, id: String) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-post' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.deleteUser(id);
          this.auth.logout({ returnTo: this.doc.location.origin });
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
