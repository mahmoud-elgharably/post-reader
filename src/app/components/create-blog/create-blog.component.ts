import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  title: string = '';
  blogContent: string = '';
  public: boolean = false;
  @Output() addBlog: EventEmitter<Blog> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const blog: Blog = {
      title: this.title,
      blogContent: this.blogContent,
      public: this.public
    }

    this.addBlog.emit(blog);

    this.title = '';
    this.blogContent = '';
    this.public = false;
  }

  navigate_OnClick(): void {
    //this.router.navigate(['items'], { relativeTo: this.route });
    alert("Navigate");
  }

}
