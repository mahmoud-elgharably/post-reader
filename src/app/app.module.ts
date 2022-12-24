import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { HistoryComponent } from './components/history/history.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostsComponent } from './components/posts/posts.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ZooComponent } from './components/zoo/zoo.component';
import { ZooAnimalComponent } from './components/zoo-animal/zoo-animal.component';
import { TestComponent } from './components/test/test.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersComponent } from './components/users/users.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookItemComponent,
    BookmarksComponent,
    BooksListComponent,
    DirectoryComponent,
    HistoryComponent,
    NavBarComponent,
    PhotosComponent,
    PostItemComponent,
    PostsComponent,
    RecipeComponent,
    ZooComponent,
    ZooAnimalComponent,
    TestComponent,
    CommentsComponent,
    UsersComponent,
    CreatePostComponent,
    CreateBlogComponent,
    BlogsComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
