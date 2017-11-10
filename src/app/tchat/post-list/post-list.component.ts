import { Component, OnInit } from '@angular/core';
import {Post} from '../Post';
import {TchatService} from '../tchat.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private service: TchatService) { }

  ngOnInit() {
    this.service.getAllPosts().subscribe((posts: Post[]) => this.posts = posts);
  }

}
