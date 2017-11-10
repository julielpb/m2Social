import { Component, OnInit } from '@angular/core';
import {Post} from '../../tchat/Post';
import {TchatService} from '../../tchat/tchat.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  posts: Post[];
  constructor(private service: TchatService) { }

  ngOnInit() {
    this.service.getAllPosts().subscribe((posts: Post[]) => this.posts = posts);
  }

  delete(post: Post) {
    this.service.deletePost(post).subscribe();
  }

}
