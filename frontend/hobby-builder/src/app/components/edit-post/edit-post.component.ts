import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  userObject: User;
  post: Post;

  id: String;

  title: String = null;
  userId: String = null;
  author: String = null;
  tags: String[] = [];
  description: String = '';
  post_comments: String[] = [];
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;

  blankTitle: boolean = false;
  blankDescription: boolean = false;
  edited: boolean = false;

  constructor(
    private postService: PostService,
    public auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute
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
        .subscribe((user) => (this.userObject = user));

      this.postService.getPost(this.id).subscribe((post) => {
        this.post = post;
        this.title = this.post.title;
        this.author = this.post.author;
        this.tags = this.post.tags;
        this.description = this.post.description;
        this.post_comments = this.post.post_comments;
        this.date_created = this.post.date_created;
        this.date_modified = this.post.date_modified;
      });
    });
  }

  editPost() {
    this.userId = this.profileObject.sub.substring(
      6,
      this.profileObject.sub.length
    );

    if (this.title != null) {
      this.title.trim;
    }

    if (this.description != null) {
      this.description.trim;
    }

    if (
      this.title == null ||
      this.title == '' ||
      this.description == null ||
      this.description == ''
    ) {
      if (this.title == null || this.title == '') {
        this.blankTitle = true;
      } else {
        this.blankTitle = false;
      }
      if (this.description == null || this.description == '') {
        this.blankDescription = true;
      } else {
        this.blankDescription = false;
      }

      this.edited = false;
    } else {
      this.post.title = this.title;
      this.post.description = this.description;

      console.log(this.post);

      this.postService.patchPost(this.id, this.post).subscribe((post) => {
        this.edited = true;
      });

      this.blankTitle = false;
      this.blankDescription = false;
    }
  }
}
