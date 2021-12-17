import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Event } from '../../../../../frontend/src/app/models/event';
import { Post } from '../../../../../frontend/src/app/models/post';
import { User } from '../../../../../frontend/src/app/models/user';
import { EventService } from '../../../../../frontend/src/app/services/event.service';
import { PostService } from '../../../../../frontend/src/app/services/post.service';
import { UserService } from '../../../../../frontend/src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profileObject: any;
  userId: String;
  userObject : User;

  posts: Post[] = [];
  events: Event[] = [];

  mostRecentPosts : Post[] = [];
  mostRecentEvents : Event[] = [];
  recommendedPosts : Post[] = [];
  recommendedEvents : Event[] = [];
  yourPosts : Post[] = [];
  yourEvents: Event[] = [];
  eventsHosting : Event[] = [];
  eventsAttending : Event[] = [];


  constructor(public auth: AuthService, private postService : PostService, private eventService: EventService, private userService : UserService) { }

  ngOnInit(): void {

    //load most recent posts no matter whether user is logged in or not
    this.postService.getPosts().subscribe(posts=>
      {
        this.posts=posts;
        for(let i = 0; i < this.posts.length; i++)
        {
          this.mostRecentPosts.push(this.posts[i]);
        }

        //sorts most recent posts by date
        this.mostRecentPosts.sort((a,b)=>this.sortPost(a,b));

        //gets maximum of 5 posts
        if(this.mostRecentPosts.length > 5)
        {
          this.mostRecentPosts = this.mostRecentPosts.slice(0,5);
        }



      }

        
    );

    //load most recent events no matter whether user is logged in or not
    this.eventService.getEvents().subscribe(events=>
      {
        this.events=events;

        for(let i = 0; i < this.events.length; i++)
        {
          this.mostRecentEvents.push(this.events[i]);
        }

        //sorts most recent events by date
        this.mostRecentEvents.sort((a,b)=>this.sortEvent(a,b));

        //gets maximum of 5 posts
        if(this.mostRecentEvents.length > 5)
        {
          this.mostRecentEvents = this.mostRecentEvents.slice(0,5);
        }


       

      });


      //checks if user is logged in and then shows relevant posts and events
    this.auth.user$.subscribe((profile)=>{
      this.profileObject = profile;

      if(this.profileObject != null)
      {
        this.userId = this.profileObject.sub.substring(6,this.profileObject.sub.length);    
      }
      else{
        this.userId = null;
      }    

      this.userService.getUser(this.userId).subscribe(user=>
        {
          this.userObject=user;

         
      
              for(let i = 0; i < this.posts.length; i++)
              {
      
                //compare tags of post and tags of user
                if(this.compareTags(this.posts[i].tags,this.userObject.hobbies))
                {
                  this.recommendedPosts.push(this.posts[i]);
                }
      
                //check user that created post
                if(this.userId===this.posts[i].user)
                {
                  this.yourPosts.push(this.posts[i]);
                }
              }

              //gets maximum of 5 posts
              if(this.recommendedPosts.length > 5)
              {
                this.recommendedPosts = this.recommendedPosts.slice(0,5);
              }
              if(this.yourPosts.length > 5)
              {
                this.yourPosts = this.yourPosts.slice(0,5);
              }


              for(let i = 0; i < this.events.length; i++)
              {
      
                //compare tags of event and tags of user
                if(this.compareTags(this.events[i].tags,this.userObject.hobbies))
                {
                  this.recommendedEvents.push(this.events[i]);
                }
      
                //check if user is going/maybe to events
                if(this.events[i].attendees["1"].includes(this.userId) || this.events[i].attendees["0"].includes(this.userId))
                {
                  this.yourEvents.push(this.events[i]);
                }
              }


              //gets maximum of 5 posts
              if(this.recommendedEvents.length > 5)
              {
                this.recommendedEvents = this.recommendedEvents.slice(0,5);
              }
              if(this.yourEvents.length > 5)
              {
                this.yourEvents = this.yourEvents.slice(0,5);
              }    
        });
    });
    
  }

  sortPost(a : Post, b: Post)
  {
      if(a.date_created<b.date_created)
      {
        return 1;
      }
      else if(a.date_created>b.date_created)
      {
        return -1;
      }
      else{
        return 0;
      }
  }

  sortEvent(a : Event, b: Event)
  {
      if(a.date_created<b.date_created)
      {
        return 1;
      }
      else if(a.date_created>b.date_created)
      {
        return -1;
      }
      else{
        return 0;
      }
  }

  compareTags(arr1 : String[], arr2:String[]) : Boolean{

    var tagMatch = false;

    for(let i = 0; i < arr1.length;i++)
    {
      for(let j = 0; j < arr2.length; j++)
      {
        if(arr1[i]===arr2[j])
        {
          tagMatch = true;
          break;
        }
      }
    }


    return tagMatch;
  }

}
