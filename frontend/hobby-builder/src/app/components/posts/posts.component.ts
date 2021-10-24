import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 //post components
 posts: Post[] = [];
 postsCopy: Post[] = [];
 profileObject: any = null;
 
 title: String = null;

 mostRecent : String = null;
 recommended : String = null;
 yours : String = null;

 constructor(private postService : PostService, public auth: AuthService) { }

 ngOnInit(): void {
  this.postService.getPosts().subscribe(posts=>
    {
      this.posts=posts;
      for(let i = 0; i < this.posts.length; i++)
      {
        this.postsCopy[i] = this.posts[i];
      }
    }
  );
  this.auth.user$.subscribe((profile)=>(this.profileObject = profile))

 }

 search() : void
 {
   alert(this.mostRecent);
   if(this.title.trim() ==null && this.title.trim() == '')
   {
    for(let i = 0; i < this.posts.length; i++)
    {
      this.postsCopy[i] = this.posts[i];
    }
   }
   else
   {
    this.postsCopy=[];

    for(let i = 0; i < this.posts.length; i++)
    {
      if(this.posts[i].title.toLowerCase().includes(this.title.toLowerCase()))
      {
        this.postsCopy[i] = this.posts[i];
      }
    }
   }

 }

 
}
