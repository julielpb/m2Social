import { Component, OnInit } from '@angular/core';
import {Post} from '../Post';
import {TchatService} from '../tchat.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(private service: TchatService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap)  => this.service.getIdPost(+params.get('id')))
      .subscribe((post: Post) => this.post = post);
  }

  ngOnInit() {
  }

  delete() {
    this.service.deletePost(this.post).subscribe();
  }

}
