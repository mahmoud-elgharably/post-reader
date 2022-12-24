import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=8");    
  }

  getPosts2() {
    return [
      {
        id: 1,
        title: "My first post",
        body: "Just testing this output!",
        votes: 7
      },
      {
        id: 2,
        title: "What is your favorite front-end framework?",
        body: "it is Angular",
        votes: 12
      },
      {
        id: 3,
        title: "Come play with me",
        body: "another test",
        votes: 3
      }
    ]
  }

}
