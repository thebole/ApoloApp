import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}




    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean  {
        if (this.authenticationService.isAuthenticated()) {
          return true
        } else {
          this.router.navigateByUrl('/login');
          return false;
      }
    }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot) {
  //     const currentUser = this.authenticationService.currentUserValue;
  //     if (currentUser) {
  //         // authorised so return true
  //         return true
  //       }

  //       // not logged in so redirect to login page with the return url
  //       this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
  //       return false;
  //     }

      
}
