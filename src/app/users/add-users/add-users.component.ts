import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
})
export class AddUsersComponent implements OnInit {
  addUserFrom: FormGroup = new FormGroup({});
  inProcess: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.addUserFrom = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    });
  }

  addUserToDB() {
    console.log(this.addUserFrom.value);
    this.inProcess = true;
    this.userService.addUser(this.addUserFrom.value).subscribe((data) => {
      console.log(data);
      this.addUserFrom.reset();
      this.inProcess = false;
    });
  }
}
