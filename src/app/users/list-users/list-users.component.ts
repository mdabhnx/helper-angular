import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.listUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
