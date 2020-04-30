import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit(){
    this.subscription = this.alertService.getAlert().subscribe(mssg =>{
      switch (mssg && mssg.type) {
        case 'success':
          mssg.cssClass = 'alert alert-success';
          break;
          case 'error':
            mssg.cssClass = 'alert alert-danger';
            break;
      }
      this.message = mssg;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
