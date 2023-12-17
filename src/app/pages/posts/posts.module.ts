import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from '../../shared/material.module'

import { PostsComponent } from "./posts.component";
import { PostComponent } from "./post/post.component";
import { SelectedPostComponent } from './selected-post/selected-post.component'

import { PostsService } from "src/app/services/posts.service";

@NgModule({
    declarations:[
        PostsComponent,
        PostComponent,
        SelectedPostComponent
    ],
    imports: [
        MaterialModule,
        CommonModule
    ],
    providers:[
        PostsService
    ]
})
export class PostsModule { }