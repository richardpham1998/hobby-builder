import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  posts: Post[] = [];
  title: String = null;
  userId: String = null;
  description: String = '';
  post_comments: String[] = [];
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;


  constructor(private postService : PostService, public auth: AuthService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts=>this.posts=posts);
    this.auth.user$.subscribe((profile)=>(this.profileObject = profile));
  }

  addPost()
  {
    this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);

    if(this.title==null || this.description==null)
    {
      if(this.title==null)
      {
        alert("Title is blank");
      }
      if(this.description==null)
      {
        alert("Description is blank");
    }
    }
    else{
      const newPost =
      {
        title: this.title,
        description: this.description,
        user: this.userId,
        post_comments: [],
        date_created: new Date,
        date_modified: null
      }
      this.title = null;
      this.userId= null;
      this.description= '';
      this.post_comments= [];
      this.date_created= null;
      this.date_modified= null;

      this.postService.addPost(newPost).subscribe(post=>this.posts.push(post));

      alert("Successfully added");

      
    }

  }
}
