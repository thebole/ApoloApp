import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';


const routes: Routes = [{
  path:'',
  component: IndexComponent,
  // canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
