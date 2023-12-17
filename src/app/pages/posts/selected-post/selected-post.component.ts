import { Component, Input } from '@angular/core'

import { Post } from '../../../models/post.model'

@Component({
    selector: 'app-post-selected',
    templateUrl: './selected-post.component.html',
    styleUrls: ['./selected-post.component.scss']
})
export class SelectedPostComponent {
    @Input() selectedPost: Post | any = null
}