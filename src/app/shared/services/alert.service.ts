import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
      this.router.events.subscribe(evnt => {
        if (evnt instanceof NavigationStart) {
          if (this.keepAfterRouteChange) {
            // only keep for a single route change
            this.keepAfterRouteChange = false;
          }else {
            // clear alert message
            this.clear();
          }
        }
      });
   }

   getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(mssg: string, keepAfterRouteChange = false){
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({type: 'error' , text: mssg});
  }

  clear() {
    // clear by calling subject.next() without parameters
    this.subject.next();  
  }

}
