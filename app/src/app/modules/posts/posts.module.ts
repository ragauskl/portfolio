import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PostComponent } from './post/post.component'
import { PostsComponent } from './posts.component'
import { PostCoverComponent } from './components/post-cover/post-cover.component'
import { PostsRoutingModule } from './posts.routing'

@NgModule({
  declarations: [PostComponent, PostsComponent, PostCoverComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
