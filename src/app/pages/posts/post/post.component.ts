import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Post } from "../../../models/post.model";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent { 
    @Input() posts: any = []
    @Output() selectedPost = new EventEmitter<Post | null>()

    selectPost(post: Post){
        this.selectedPost.emit(post)
    }
}