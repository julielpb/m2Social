import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {TchatService} from '../tchat.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private service: TchatService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap)  => this.service.getIdUser(+params.get('id')))
      .subscribe((user: User) => this.user = user);
  }

  ngOnInit() {
  }

}
