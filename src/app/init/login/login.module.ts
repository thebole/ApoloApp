import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [LoginComponent, IndexComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
