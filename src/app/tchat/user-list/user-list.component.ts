import { Component, OnInit } from '@angular/core';
import {TchatService} from '../tchat.service';
import {User} from '../User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private service: TchatService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe((users: User[]) => this.users = users);
  }

}
