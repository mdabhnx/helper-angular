import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  userId: string = '';
  userDetails: any = {};
  isLoading: boolean = true;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      return (this.userId = data['id']);
    });

    this.userService.viewUser(this.userId).subscribe((data) => {
      console.log(data);
      this.userDetails = data;
      this.isLoading = false;
    });
  }
}
