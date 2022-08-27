import { Component } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sampleproject';
  postService: PostService;
  posts: [Post]

  // initiate PostService in component
  constructor(postService: PostService) {
    this.postService = postService;
    this.posts = this.postService.getPosts()

  }

  addPost() {
    // Create new post
    const newPost: Post = {
      title: `Post ${this.posts.length}`,
      content: 'this is the content for this post',
    };

    // update list of posts in service and component
    this.postService.addPosts(newPost)
    this.posts = this.postService.getPosts()
  }
}
