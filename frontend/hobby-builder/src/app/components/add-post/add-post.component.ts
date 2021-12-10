import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  posts: Post[] = [];
  title: String = null;
  userId: String = null;
  author: String = null;
  tags: String[] = [];
  description: String = '';
  post_comments: String[] = [];
  date_created: Date = null;
  date_modified: Date = null;

  userName: String;

  profileObject: any = null;


  added: boolean = false;

  postForm: FormGroup;

  blankTitle:Boolean = false;
  blankDescription:Boolean = false;


  constructor(
    private postService: PostService,
    public auth: AuthService,
    private modalService: NgbModal,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
    this.auth.user$.subscribe((profile) => {
      this.profileObject = profile;

      this.userService
        .getUser(
          this.profileObject.sub.substring(6, this.profileObject.sub.length)
        )
        .subscribe((profile) => {
          this.userName = profile.username;
        });
    });

    this.postForm =this.fb.group({
      title:['', Validators.required],
      description:['', Validators.required],
    });


  
  }

  onSubmit() {

    if(!this.postForm.valid)
    {
      this.added=false;
      if(this.postForm.value.title === '')
      {
        this.blankTitle = true;
      }
      else
      {
        this.blankTitle=false;
      }

      if(this.postForm.value.description === '')
      {
        this.blankDescription = true;
      }
      else{
        this.blankDescription=false;
      }
    }
    else
    {

      this.blankTitle=false;
      this.blankDescription=false;
    this.userId = this.profileObject.sub.substring(
      6,
      this.profileObject.sub.length
    );

      const newPost = {
        title: this.postForm.value.title,
        likes: { '-1': [], '0': [], '1': [] },
        description: this.postForm.value.description,
        user: this.userId,
        author: this.userName,
        post_comments: [],
        tags: this.tags,
        date_created: new Date(),
        date_modified: null,
      };


      this.postService.addPost(newPost).subscribe((post) => {
        this.posts.push(post);
        this.added = true;
      });


    this.postService.getPosts().subscribe((posts) => (this.posts = posts));

  }
}

  
}
