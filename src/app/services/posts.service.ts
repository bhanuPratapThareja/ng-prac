import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http";

import { Post, Post2 } from '../models/post.model'

@Injectable()
export class PostsService {

    constructor(private http: HttpClient) { }

    fetchPosts() {
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    }

}