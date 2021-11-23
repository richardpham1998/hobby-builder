import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { TagComponent } from './components/tag/tag.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEventComponent } from './components/add-event/add-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TagOptionsComponent } from './components/tag-options/tag-options.component';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { PostDisplayComponent } from './components/post-display/post-display.component';
import { EventDisplayComponent } from './components/event-display/event-display.component';
import { CommentDisplayComponent } from './components/comment-display/comment-display.component';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    NavBarComponent,
    ProfileComponent,
    HomeComponent,
    PostComponent,
    AddPostComponent,
    AddCommentComponent,
    CommentComponent,
    TagComponent,
    PostsComponent,
    AddEventComponent,
    EditCommentComponent,
    EditPostComponent,
    EditProfileComponent,
    EventsComponent,
    EventComponent,
    EditEventComponent,
    NotificationsComponent,
    TagOptionsComponent,
    TagsListComponent,
    PostDisplayComponent,
    EventDisplayComponent,
    CommentDisplayComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot
    ({
        ... env.auth,
    }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
