import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './routes/app-routing.module';
import { HomeModule } from './pages/home/home.module'
import { AboutModule } from './pages/about/about.module';
import { PostsModule } from './pages/posts/posts.module';

import { AppComponent } from './app.component';
import { Header } from './components/header/header.component'
import { Footer } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AboutModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
