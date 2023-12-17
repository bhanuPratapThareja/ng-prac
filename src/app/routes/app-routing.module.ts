import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from '../pages/home/home.component'
import { AboutComponent } from '../pages/about/about.component'
import { PostsComponent } from '../pages/posts/posts.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '' },
    { path: 'about', component: AboutComponent },
    { path: 'posts', component: PostsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }