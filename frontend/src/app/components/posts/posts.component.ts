import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  //post components
  posts: Post[] = [];
  postsCopy: Post[] = [];
  profileObject: any = null;

  title: String = null;
  author: String = null;

  mostRecent: String = null;

  tags: String[] = [];

  ind : number = 0;

  constructor(
    private postService: PostService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;

      //get most recent posts
      for (let i = 0; i < this.posts.length; i++) {
        this.postsCopy[i] = this.posts[this.posts.length - 1 - i];
      }
    });



    this.auth.user$.subscribe((profile) => (this.profileObject = profile));
  }

  search(): void {

    //filter based on title
    if (this.title == null || this.title.trim() == '') {
      //get most recent posts
      for (let i = 0; i < this.posts.length; i++) {
        this.postsCopy[i] = this.posts[this.posts.length - 1 - i];
      }
    } else {
      this.postsCopy = [];

      for (let i = 0; i < this.posts.length; i++) {
        if (
          this.posts[i].title.toLowerCase().includes(this.title.toLowerCase())
        ) {
          this.postsCopy[i] = this.posts[i];
        }
      }
    }

    //filter based on author
     if (!(this.author == null || this.author.trim() == '')) {
      for (let i = this.postsCopy.length-1; i >= 0; i--) {
        if (
          !this.postsCopy[i].author
            .toLowerCase()
            .includes(this.author.toLowerCase())
        ) {
          this.postsCopy.splice(i,1);
        }
      }
     }

    //filter based on tags
    this.checkTags();
  }


  //check if search contains all the tags
  checkTags() {
    for (let i = this.postsCopy.length - 1; i >= 0; i--) {
      var remove = 0;

      for (let j = 0; j < this.tags.length; j++) {
        if (!this.postsCopy[i].tags.includes(this.tags[j])) {
          remove = 1;
        }
      }
      if (remove == 1) {
        this.postsCopy.splice(i, 1);
      }
    }
  }

  prev()
  {
    if(this.ind > 0)
    {
      this.ind = this.ind - 10;
    }
  }

  next()
  {
    if(this.ind +10< this.postsCopy.length)
    {
      this.ind = this.ind + 10;
    }
  }
}
