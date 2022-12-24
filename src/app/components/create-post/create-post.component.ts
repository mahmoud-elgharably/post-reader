import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title: string = '';
  body: string = '';

  @Output() addPost: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    const post: Post ={
      title: this.title,
      body: this.body,
      votes: 1
    }

    this.addPost.emit(post);

    this.title = '';
    this.body = '';
  }

}