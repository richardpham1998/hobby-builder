import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Post } from 'src/app/models/post';
import { Tag } from 'src/app/models/tag';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { TagService } from 'src/app/services/tag.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  description: String = '';
  post_comments: String[] = [];
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;

  edited: boolean = false;

  postForm: FormGroup;

  //input array
  tags: String[] = [];

  blankTitle: Boolean = false;
  blankDescription: Boolean = false;

  constructor(
    private postService: PostService,
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
        .subscribe((user) => (this.userObject = user));

      this.postService.getPost(this.id).subscribe((post) => {
        if (post != null) {
          this.post = post;

          this.postForm = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
          });

          this.postForm.setValue({
            title: post.title,
            description: post.description,
          });

          this.tags = post.tags;
        }
      });
    });
  }

  onSubmit() {
    if (!this.postForm.valid) {
      if (this.postForm.value.title === '') {
        this.blankTitle = true;
      } else {
        this.blankTitle = false;
      }

      if (this.postForm.value.description === '') {
        this.blankDescription = true;
      } else {
        this.blankDescription = false;
      }
    } else {
      this.blankTitle = false;
      this.blankDescription = false;

      this.userId = this.profileObject.sub.substring(
        6,
        this.profileObject.sub.length
      );

      this.post.title = this.postForm.value.title;
      this.post.description = this.postForm.value.description;

      this.postService.patchPost(this.id, this.post).subscribe((post) => {
        this.edited = true;
      });
    }
  }
}
