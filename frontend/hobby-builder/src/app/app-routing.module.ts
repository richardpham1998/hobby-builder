import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '@auth0/auth0-angular';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TagComponent } from './components/tag/tag.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'profile/:id',
    component: ProfileComponent,
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
    path:'tag',
    component: TagComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
