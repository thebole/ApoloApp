import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { AuthenticationService } from 'src/app/shared/services/login/authentication.service';
import { UserService } from 'src/app/shared/services/login/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  currentUser: User;
  users = [];
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers() {
    // this.userService.getAll().pipe(first()).subscribe(users => { this.users = users;});
    console.log('soy el index!!!!!');
  }

}
