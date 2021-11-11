import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '@auth0/auth0-angular';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TagComponent } from './components/tag/tag.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './components/events/events.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'edit-profile/:id',
    component: EditProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'post/:id',
    component: PostComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'add-post',
    component: AddPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'edit-post/:id',
    component: EditPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'tag',
    component: TagComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'add-event',
    component: AddEventComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'events',
    component: EventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'event/:id',
    component: EventComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'edit-event/:id',
    component: EditEventComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'add-comment/:num/:id',
    component: AddCommentComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'edit-comment/:num/:id/:commentId',
    component: EditCommentComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'notifications',
    component: NotificationsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
