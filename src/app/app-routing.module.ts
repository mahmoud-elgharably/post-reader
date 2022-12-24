import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { HistoryComponent } from './components/history/history.component';
import { AboutComponent } from './components/about/about.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { PhotosComponent } from './components/photos/photos.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ZooComponent } from './components/zoo/zoo.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersComponent } from './components/users/users.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: PostsComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'about', component: AboutComponent},
  { path: 'books', component: BooksListComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'recipe', component: RecipeComponent},
  { path: 'zoo', component: ZooComponent},
  { path: 'directory', component: DirectoryComponent},
  { path: 'bookmarks', component: BookmarksComponent},
  { path: 'comments', component: CommentsComponent},
  { path: 'users', component: UsersComponent},
  { path: 'blogs', component: BlogsComponent},
  { path: 'signin', component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
