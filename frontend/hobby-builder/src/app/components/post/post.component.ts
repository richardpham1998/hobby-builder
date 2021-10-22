import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {Comment} from '../../models/comment';
import {Tag} from '../../models/tag';
import {PostService} from '../../services/post.service'
import { AuthService } from '@auth0/auth0-angular';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {


  post: Post = null;
  id: String = null;
  
  //post components
  posts: Post[] = [];
  comments: Comment[] = [];
  title: String = null;
  userId: String = null;
  author: String = null;
  description: String = '';
  post_comments: String[] = [];
  tags : String[] = [];
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;
  blankTitle: boolean = false;
  blankDescription: boolean = false;
  editPost: boolean = false;

  hobbyExists: boolean = false;

  //comment components
  comment_content: String = '';
  comment_author: String = '';
  comment_event: String = null;
  comment_post: String = null;
  comment_date_created: Date = null;
  comment_date_modified: Date = null;
  comment_blankContent: boolean = false;
  editCommentId: String= null;
  commentToEdit: Comment = null;
  addCommentOption : Boolean = false;
  commentList : Comment[] = [];

  //tag components
  tagOptions: Tag[]= [];
  tagId: String = null;
  hobbyNames: String[] = [];
  hobbyObject: Tag;

  //modal components
  closeResult = '';
  postToDelete : String = null;
  commentToDelete : String = null;

  //user component
  userObject: User;

  //profile substring
  profileSubstring : String;

  constructor(private postService : PostService, public auth: AuthService, private commentService: CommentService, private route: ActivatedRoute, private tagService: TagService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    
    this.postService.getPost(this.id).subscribe(post=>
      {
        this.post=post;
        if(this.post["name"]=="CastError")
        {
          this.post = null;
        }
        else{
          this.tags = this.post.tags;
          this.tagService.getTags().subscribe(tags=>{
            this.tagOptions=tags;
            this.tagOptions.sort((a,b)=>this.sortTags(a,b));
            this.loadHobbyNames();
          });

          this.commentService.getComments().subscribe(comments=>
            {
              this.comments=comments;
              for(let i = comments.length-1;i>=0;i--)
              {
                if(comments[i].post===this.post._id)
                {
                  this.commentList.push(comments[i]);
                }
              }
            }
          );
        }

      }
    );

    this.postService.getPosts().subscribe(posts=>this.posts=posts);
    
    this.auth.user$.subscribe((profile)=>
      {
        this.profileObject = profile;

        console.log(this.auth.user$)
        
        //user.sub.substring(6,user.sub.length)
      }
      
      )
  }

  
  //delete post
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

       for(var i = this.comments.length-1; i >=0; i--)
       {
         if(this.comments[i].post == id)
         {
           this.commentService.deleteComment(this.comments[i]._id).subscribe();
           this.comments.splice(i,1);
         }
       }

       this.postService.getPost(this.id).subscribe(post=>
        {
          this.post=post;
          if(this.post["name"]=="CastError")
          {
            this.post = null;
          }
        }
      );
     
     });
  }

  //cancel edit option for post
  cancelUpdate()
  {
    this.editPost = false;
    
    this.title = null;
    this.description= '';
    this.post_comments= [];
    this.date_created= null;
    this.date_modified= null;
    this.postService.getPosts().subscribe(posts=>this.posts=posts);
  }

  //launches edit window for post
  editOption(id:String)
  {

    this.editPost = true;
    this.title = this.post.title;
    this.description= this.post.description;
    this.date_created= this.post.date_created;
    this.date_modified= this.post.date_modified;

   this.postService.getPosts().subscribe(posts=>this.posts=posts);


  }

  //updates post
  updatePost(id: String)
  {
    this.editPost = false;

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
      this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);
      const newPost =
      {
        title: this.title,
        description: this.description,
        user: this.userId,
        author: this.author,
        tags: this.tags,
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
          this.postService.getPost(this.id).subscribe(post=>
            {
              this.post=post;
              if(this.post["name"]=="CastError")
              {
                this.post = null;
              }
            }
          );
        });

        this.title = null;
        this.author = null;
        this.description= '';
        this.post_comments= [];
        this.date_created= null;
        this.date_modified= null;  
    }
  }

  //Comment functionalities

  selectComment()
  {
    this.cancelComment();
    this.addCommentOption = true;
    this.commentService.getComments().subscribe(comments=>this.comments=comments);
  }

  //adds comment
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
        author: this.profileObject.nickname,
        post: postId,
        event: eventId,
        date_created: new Date,
        date_modified: null
      }

      this.commentService.addComment(newComment).subscribe(comment=>{
        this.comments.push(comment);
        this.commentList= [];
        this.commentService.getComments().subscribe(comments=>
          {
            this.commentList = [];
            this.comments=comments;
            for(let i = comments.length-1;i>=0;i--)
            {
              if(comments[i].post===this.post._id)
              {
                this.commentList.push(comments[i]);
              }
            }
          }
        );
      });

      this.comment_content = '';
      this.comment_author = null;
      this.comment_event= null;
      this.comment_post= null;
      this.comment_date_created= null;
      this.comment_date_modified= null;

      this.comment_blankContent=false;

      this.cancelComment();
      this.addCommentOption = false;
    }
  }

  //removes comment
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

       for(var i = 0; i < this.commentList.length; i++)
       {
         if(this.commentList[i]._id == id)
         {
           this.commentList.splice(i,1);
         }
       }

       this.commentService.getComments().subscribe(comments=>this.comments=comments);
     
     });
  }

  //opens edit window for comment
  editComment(id:String)
  {

    this.addCommentOption = false;
    this.editCommentId = id;


    this.commentService.getComment(this.editCommentId).subscribe(comment=>{
      this.commentToEdit=comment;
      if(this.commentToEdit != null)
      {
        this.comment_content = this.commentToEdit.content;
        this.comment_event = this.commentToEdit.event;
        this.comment_post = this.commentToEdit.post;
        this.comment_author = this.commentToEdit.author;
        this.comment_date_created = this.commentToEdit.date_created;
        this.comment_date_modified = this.commentToEdit.date_modified;
      }
    })

    this.commentService.getComments().subscribe(comments=>this.comments=comments);


  }

  //cancels edit option fo comment
  cancelComment()
  {
    this.editCommentId='';
    this.addCommentOption=false;

    this.comment_content = '';
    this.comment_event = null;
    this.comment_post = null;
    this.comment_author = null;
    this.comment_date_created = null;
    this.comment_date_modified = null;
    this.editCommentId = null;
    this.commentService.getComments().subscribe(comments=>this.comments=comments);
  }

  //edits comment
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
      this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);
      const newComment =
      {
        content: this.comment_content,
        user: this.userId,
        author: this.comment_author,
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
          this.commentList[index]=comment;

          this.comment_content = '';
          this.comment_author = null;
          this.comment_event= null;
          this.comment_post= null;
          this.comment_date_created= null;
          this.comment_date_modified= null;
          this.comment_date_created= null;
          this.comment_date_modified= null;

          this.comment_blankContent=false;

          this.editCommentId = '';

          this.commentService.getComments().subscribe(comments=>
            {
              this.commentList = [];
              this.comments=comments;
              for(let i = comments.length-1;i>=0;i--)
              {
                if(comments[i].post===this.post._id)
                {
                  this.commentList.push(comments[i]);
                }
              }
            }
          );

          
      });

      }
  }

  //tag methods

  sortTags(a : Tag, b: Tag)
  {
      if(a.name>b.name)
      {
        return 1;
      }
      else if(a.name<b.name)
      {
        return -1;
      }
      else{
        return 0;
      }
  }

  loadHobbyNames()
  {
    for(let i = 0; i < this.tags.length;i++)
    {
      this.tagService.getTag(this.tags[i]).subscribe(hobby=>
        {
          this.hobbyObject = hobby;
          if(this.hobbyObject==null)
          {
            this.hobbyNames[i]=null;
          }
          else{
            this.hobbyNames[i]=this.hobbyObject.name;
          }
          
        });
      
    }
    this.hobbyObject=null;
  }

  addHobby()
  {
    if(this.tagId==null)
    {
      this.hobbyExists=false;
    }
    else if(this.tags.includes(this.tagId))
    {
      this.hobbyExists=true;
    }
    else{
      this.hobbyExists=false;
      this.tags.push(this.tagId);

      this.postService.patchPost(this.id,this.post).subscribe(post=>
        { 
          this.postService.getPost(this.id).subscribe(post=>{
              this.post=post;
              this.tags = this.post.tags;
            }
          );
          this.loadHobbyNames();
        }
      );

      this.tagId = null;

    }
  }

  deleteHobby(hobby: String)
  {
    for(var i = 0; i < this.tags.length; i++)
    {
      if(this.tags[i] == hobby)
      {
        this.tags.splice(i,1);
        this.hobbyNames.splice(i,1);
      }
    }

    this.postService.patchPost(this.id,this.post).subscribe(post=>
      { 
        this.postService.getPost(this.id).subscribe(post=>{
            this.post=post;
            this.tags = this.post.tags;
          }
        );
        this.loadHobbyNames();
      }
    );
    
  }

  //modal code
  openPost(content, id:String) {
    this.postToDelete=id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-post'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(this.postToDelete != null)
      {
        this.deletePost(this.postToDelete);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openComment(content, id:String) {
    this.commentToDelete=id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-comment'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(this.commentToDelete != null)
      {
        this.deleteComment(this.commentToDelete);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.postToDelete=null;
    this.commentToDelete=null;

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
