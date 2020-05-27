import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { IndexComponent } from './index/index.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { IndexModule } from './index/index.module';
// enrutamiento


@NgModule({
  declarations: [
    LoginComponent, 
     RegisterComponent, 
     LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    IndexModule
  ],
  providers:[]
})
export class LoginModule { }
