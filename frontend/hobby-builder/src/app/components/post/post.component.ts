import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service'
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  title: String = null;
  userId: String = null;
  description: String = '';
  post_comments: String[] = [];
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;
  editPostId: String = null;
  postToEdit: Post = null;


  constructor(private postService : PostService, public auth: AuthService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts=>this.posts=posts);
    this.auth.user$.subscribe((profile)=>(this.profileObject = profile))
  }

  deletePost(id:any)
  {
    var posts = this.posts;
    this.postService.deletePost(id)
    .subscribe(data=>
     {
       //if(data.n==1)
       if(1==1)
     {
       for(var i = 0; i < posts.length; i++)
       {
         if(posts[i]._id == id)
         {
           posts.splice(i,1);
         }
       }
     }
     });
  }

  editOption(id:String)
  {

    this.editPostId = id;

    console.log(this.editPostId);

    this.postService.getPost(id).subscribe(post=>this.postToEdit=post);

    if(this.postToEdit != null)
    {
    this.title = this.postToEdit.title;
    this.description= this.postToEdit.description;
    this.userId = this.postToEdit.user;
    this.post_comments= this.postToEdit.post_comments;
    this.date_created=  this.postToEdit.date_created;
    this.date_modified = this.postToEdit.date_modified;
    }

    this.postService.getPosts().subscribe(posts=>this.posts=posts);


  }

  updatePost(id: String)
  {

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
        post_comments: this.post_comments,
        date_created: this.date_created,
        date_modified: new Date
      }

      var index  = 0;
      for(let i = 0; i < this.posts.length; i++)
      {
        if(this.posts[i]._id = id)
        {
          index= i;
        }
      }

      this.postService.patchPost(id, newPost).subscribe(post=>this.posts[index]=post);

      this.title = null;
      this.userId= null;
      this.description= '';
      this.post_comments= [];
      this.date_created= null;
      this.date_modified= null;
      this.editPostId = null;

      this.postService.getPosts().subscribe(posts=>this.posts=posts);

      
    }

  }


}
