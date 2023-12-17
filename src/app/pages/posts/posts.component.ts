import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Post } from '../../models/post.model'
import { PostsService } from '../../services/posts.service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []
  currentSelectedPost: Post | any = null;
  // @Output() currentSelectedPost = new EventEmitter<Post | null>()
  
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.fetchPosts().subscribe({
      next: (posts: Post[]) => this.posts = posts,
      error: error => console.log(error),
      complete: () => console.log('posts loaded')
    })
  }

  onPostSelected(post: any | Post) {
    this.currentSelectedPost = post
  }

}
