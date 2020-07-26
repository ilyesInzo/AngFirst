import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../../pojo/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  usersSubscription: Subscription;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.usersSubscription = this.userService.userEmiter.subscribe((users: User[]) => {
      this.users = users;
    });
    this.userService.notifyUser();

  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

}
