import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ListUsersComponent,
    AddUsersComponent,
    EditUserComponent,
    DeleteUserComponent,
    ViewUserComponent,
  ],
  imports: [CommonModule, MatListModule, RouterModule],
})
export class UsersModule {}
