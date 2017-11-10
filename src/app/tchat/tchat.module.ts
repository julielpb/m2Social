import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TchatRootComponent } from './tchat-root/tchat-root.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {TchatService} from './tchat.service';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'tchat', component: TchatRootComponent,
    children: [
      { path: ':id', component: PostComponent},
      { path: 'user/:id', component: UserComponent},
      { path: '', component: PostListComponent}
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  exports: [
    TchatRootComponent
  ],
  declarations: [TchatRootComponent, PostComponent, PostListComponent, UserComponent],
  providers: [TchatService],
})
export class TchatModule { }
