import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

export const routes: Routes = [ 
    {
        path: '',
        component: LoginComponent,
        children: [
            {
              path: 'index',
              component: IndexComponent,
              canActivate: [AuthGuard]
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }