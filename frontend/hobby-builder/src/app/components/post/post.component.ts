import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {Comment} from '../../models/comment';
import {PostService} from '../../services/post.service'
import { AuthService } from '@auth0/auth0-angular';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  //post components
  posts: Post[] = [];
  comments: Comment[] = [];
  title: String = null;
  userId: String = null;
  name: String = null;
  description: String = '';
  post_comments: String[] = [];
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;
  editPostId: String = null;
  postToEdit: Post = null;

  blankTitle: boolean = false;
  blankDescription: boolean = false;

  //comment components
  comment_content: String = '';
  comment_name: String = '';
  comment_event: String = null;
  comment_post: String = null;
  comment_date_created: Date = null;
  comment_date_modified: Date = null;
  comment_blankContent: boolean = false;
  idToCommentOn: String = '';
  editCommentId: String= null;
  commentToEdit: Comment = null;
  addCommentOption : Boolean = false;


  constructor(private postService : PostService, public auth: AuthService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts=>this.posts=posts);
    this.commentService.getComments().subscribe(comments=>this.comments=comments);
    this.auth.user$.subscribe((profile)=>(this.profileObject = profile))
  }

  deletePost(id:any)
  {
    var posts = this.posts;
    this.postService.deletePost(id)
    .subscribe(data=>
     {

       for(var i = 0; i < posts.length; i++)
       {
         if(posts[i]._id == id)
         {
           posts.splice(i,1);
         }
       }

       for(var i = 0; i < this.comments.length; i++)
       {
         if(this.comments[i].post == id)
         {
           this.commentService.deleteComment(this.comments[i]._id).subscribe();
           this.comments.splice(i,1);
         }
       }
     
     });
  }

  cancelUpdate()
  {
    this.editPostId=null;
    this.title = null;
    this.userId= null;
    this.description= '';
    this.post_comments= [];
    this.date_created= null;
    this.date_modified= null;
    this.editPostId = null;
    this.postService.getPosts().subscribe(posts=>this.posts=posts);
  }

  editOption(id:String)
  {

    this.editPostId = id;

    console.log(this.editPostId);

    this.postService.getPost(this.editPostId).subscribe(post=>{
      this.postToEdit=post;
      if(this.postToEdit != null)
      {
      this.title = this.postToEdit.title;
      this.description= this.postToEdit.description;
      this.userId = this.postToEdit.user;
      this.name = this.profileObject.name,
      this.post_comments= this.postToEdit.post_comments;
      this.date_created=  this.postToEdit.date_created;
      this.date_modified = this.postToEdit.date_modified;
      }
    })

    this.postService.getPosts().subscribe(posts=>this.posts=posts);


  }

  updatePost(id: String)
  {

    if(this.title != null)
    {
      this.title.trim;
    }
    
    if(this.description != null)
    {
      this.description.trim;
    }

    if(this.title==null || this.title== ""|| this.description==null || this.description=="")
    {
      if(this.title==null  || this.title== "")
      {
        this.blankTitle=true;
      }
      else{
        this.blankTitle=false;
      }
      if(this.description==null || this.description=="")
      {
        this.blankDescription=true;
      }
      else{
        this.blankDescription = false;
      }
    }
    else{
      const newPost =
      {
        title: this.title,
        description: this.description,
        user: this.userId,
        name: this.name,
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

      this.postService.patchPost(id, newPost).subscribe(post=>{
          this.posts[index]=post;
          this.postService.getPosts().subscribe(posts=>this.posts=posts);
        });

        this.title = null;
        this.userId= null;
        this.name = null;
        this.description= '';
        this.post_comments= [];
        this.date_created= null;
        this.date_modified= null;
        this.editPostId = null;      
    }
  }

  //Comment functionalities

  selectComment(id: String)
  {
    this.addCommentOption = true;
    this.cancelComment();
    this.idToCommentOn= id;
    this.commentService.getComments().subscribe(comments=>this.comments=comments);
  }

  addComment(postOrEvent : Boolean, postEventId : String)
  {

    var postId: String = null;
    var eventId: String = null;

    //0
    if(postOrEvent==false)
    {
      postId = postEventId;
    }
    //1
    else
    {
      eventId = postEventId;
    }

    this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);

    if(this.comment_content != null)
    {
      this.comment_content.trim;
    }

    if(this.comment_content==null  || this.comment_content== "")
    {
      this.comment_blankContent=true;
    }
    else{
      const newComment =
      {
        content: this.comment_content,
        user: this.userId,
        name: this.profileObject.name,
        post: postId,
        event: eventId,
        date_created: new Date,
        date_modified: null
      }

      this.commentService.addComment(newComment).subscribe(comment=>{
        this.comments.push(comment);
        this.commentService.getComments().subscribe(comments=>this.comments=comments);
      });

      this.comment_content = '';
      this.userId= null;
      this.comment_name = null;
      this.comment_event= null;
      this.comment_post= null;
      this.comment_date_created= null;
      this.comment_date_modified= null;



      this.comment_blankContent=false;

      this.idToCommentOn = '';
    }
  }

  deleteComment(id:any)
  {
    var comments = this.comments;
    this.commentService.deleteComment(id)
    .subscribe(data=>
     {

       for(var i = 0; i < comments.length; i++)
       {
         if(comments[i]._id == id)
         {
           comments.splice(i,1);
         }
       }

       this.commentService.getComments().subscribe(comments=>this.comments=comments);
     
     });
  }

  editComment(id:String)
  {

    this.addCommentOption = false;
    this.editCommentId = id;

    console.log(this.editPostId);

    this.commentService.getComment(this.editCommentId).subscribe(comment=>{
      this.commentToEdit=comment;
      if(this.commentToEdit != null)
      {
        this.comment_content = this.commentToEdit.content;
        this.comment_event = this.commentToEdit.event;
        this.comment_post = this.commentToEdit.post;
        this.comment_date_created = this.commentToEdit.date_created;
        this.comment_date_modified = this.commentToEdit.date_modified;
      }
    })

    this.commentService.getComments().subscribe(comments=>this.comments=comments);


  }

  cancelComment()
  {
    this.comment_content = '';
    this.comment_event = null;
    this.comment_post = null;
    this.comment_date_created = null;
    this.comment_date_modified = null;
    this.editCommentId = null;
    this.commentService.getComments().subscribe(comments=>this.comments=comments);
  }

  updateComment(id: String)
  {

    if(this.comment_content != null)
    {
      this.comment_content.trim;
    }

    if(this.comment_content==null  || this.comment_content== "")
    {
      this.comment_blankContent=true;
    }
    else{
      const newComment =
      {
        content: this.comment_content,
        user: this.userId,
        name: this.comment_name,
        post: this.comment_post,
        event: this.comment_event,
        date_created: new Date,
        date_modified: null
      }

      var index  = 0;
      for(let i = 0; i < this.comments.length; i++)
      {
        if(this.comments[i]._id = id)
        {
          index= i;
        }
      }

      this.commentService.patchComment(id, newComment).subscribe(comment=>{
          this.comments[index]=comment;
          this.commentService.getComments().subscribe(comments=>this.comments=comments);

          this.comment_content = '';
          this.userId= null;
          this.comment_name = null;
          this.comment_event= null;
          this.comment_post= null;
          this.comment_date_created= null;
          this.comment_date_modified= null;
          this.comment_date_created= null;
          this.comment_date_modified= null;

          this.comment_blankContent=false;

          this.editCommentId = '';
          
    });



      }
  }
}
