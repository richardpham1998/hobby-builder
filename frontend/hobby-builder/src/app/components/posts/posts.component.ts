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
 profileObject: any = null;

 constructor(private postService : PostService, public auth: AuthService) { }

 ngOnInit(): void {
  this.postService.getPosts().subscribe(posts=>this.posts=posts);
  this.auth.user$.subscribe((profile)=>(this.profileObject = profile))
 }

 
}
