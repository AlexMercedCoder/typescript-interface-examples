import { Injectable } from '@angular/core';
import { Post } from './types';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  #posts:[Post] // Private Property of Posts

  constructor() {
    this.#posts = [{title: "Post 0", content: "content for post 0"}]
   }

  // method for adding a post
  addPosts(newPost: Post){
    this.#posts.push(newPost)
  }

  // method for getting all posts
  getPosts(){
    return this.#posts
  }
}
