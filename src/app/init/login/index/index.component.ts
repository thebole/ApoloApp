import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { AuthenticationService } from 'src/app/shared/services/login/authentication.service';
import { UserService } from 'src/app/shared/services/login/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  currentUser: User;
  usersData:any[] = [];
  user: string;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usersData = this.loadUsers();
    this.user = localStorage.getItem('name');
  }

  private loadUsers() {
    // this.userService.getAll().pipe(first()).subscribe(users => { this.users = users;});
    let userData = JSON.parse(localStorage.getItem('currentUser')); 
    return userData;
  }

  logout () {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }
  

}
