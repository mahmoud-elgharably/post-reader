import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app//services/http.service';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private httpService: HttpService) { 
    this.comments = [];
  }

  ngOnInit(): void {
    this.httpService.getComments().subscribe(data => {
      this.comments = data;
    });
  }

}
