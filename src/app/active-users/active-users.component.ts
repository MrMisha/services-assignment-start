import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  constructor(private userService: UserService){}
  users: string[];

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }
}
