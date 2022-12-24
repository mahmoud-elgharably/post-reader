import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/Comment';
import { User } from '../models/User';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?_limit=7');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users?_limit=11');
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');
  }
}
