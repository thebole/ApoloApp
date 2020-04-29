import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { IndexComponent } from './index/index.component';
import { LoginRoutingModule } from './login-routing.module';

// enrutamiento


@NgModule({
  declarations: [
    LoginComponent, 
    IndexComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
