import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getBlogs().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const blog = res[index];
        blog["blogContent"] = blog["title"] + '_Content';
        blog["public"] = <boolean>blog["completed"];
      }
      this.blogs = res;
    });
  }

  addBlog(blog: Blog): void {
    //this.blogs.push(blog);
    this.blogs.unshift(blog);
    alert("Blog added!");
  }
}
