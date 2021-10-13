import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  posts: Post[] = [];
  title: String = null;
  userId: String = null;
  author: String = null;
  tags: String [] = [];
  description: String = '';
  post_comments: String[] = [];
  date_created: Date = null;
  date_modified: Date = null;

  profileObject: any = null;

  blankTitle: boolean = false;
  blankDescription: boolean = false;

  //modal code
  closeResult = '';


  constructor(private postService : PostService, public auth: AuthService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts=>this.posts=posts);
    this.auth.user$.subscribe((profile)=>(this.profileObject = profile));
  }

  addPost()
  {
    this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);

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
        author: this.profileObject.name,
        post_comments: [],
        tags: [],
        date_created: new Date,
        date_modified: null
      }
      this.title = null;
      this.userId= null;
      this.description= '';
      this.tags = [];
      this.post_comments= [];
      this.date_created= null;
      this.date_modified= null;

      this.postService.addPost(newPost).subscribe(post=>this.posts.push(post));

      this.blankTitle=false;
      this.blankDescription=false;

      
    }

    this.postService.getPosts().subscribe(posts=>this.posts=posts);

  }

  //modal code
  open(content) {
    this.addPost();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
