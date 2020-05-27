import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { AuthenticationService } from 'src/app/shared/services/login/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() userData: User;
  constructor( 
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    // console.log(this.userData);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }
}
