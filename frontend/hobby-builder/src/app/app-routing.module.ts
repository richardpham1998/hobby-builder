import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '@auth0/auth0-angular';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'post',
    component: PostComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'add-post',
    component: AddPostComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
