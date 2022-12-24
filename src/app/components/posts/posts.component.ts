import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Country } from '../../models/Country';
import { Post } from '../../models/Post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']  
})
export class PostsComponent {
  title: string = "Posts!";
  name: string = "Fathy";
  grade: number = 57;
  imageUrl: string = "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_780,h_439,c_fill,q_auto,g_center/cnnarabic/2022/12/11/images/228104.jpg";
  posts: Post[] = [];
  countryList: object[] = [];
  countryList2: Country[] = [];
  message: string = 'My Favorite Blogs';
  message2: string = 'Header';

  getCourseGrade(): string {
    return "A+";
  }
  
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const post = res[index];
        post["votes"] = 1;
      }

      this.posts = res;
    });

/*     this.posts = this.postService.getPosts2(); */

/*     this.posts = [
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
 */
    this.countryList = [
      {
        name: 'Spain',
        population: 46754778
      },
      {
        name: 'New Zealand',
        population: 4822233    
      },
      {
        name: 'United States of America',
        population: 331002651    
      }
    ]

    this.countryList2 = [
      {
        name: 'Spain2',
        population: 26754772
      },
      {
        name: 'New Zealand2',
        population: 2822232    
      },
      {
        name: 'United States of America2',
        population: 231002652
      }
    ]

  }

  ngOnDestroy(): void {
    // Component destruction code here
    this.title = "NOOOOOOOOOOOO";
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter(p => p.id !== post.id);
  }

  addNewPost(post: Post): void {
    //this.posts.push(post);
    this.posts.unshift(post);
    alert("Post added!");
  }

}