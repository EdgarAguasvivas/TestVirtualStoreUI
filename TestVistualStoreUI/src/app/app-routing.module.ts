import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { RegistrationComponent } from './components/account/registration/registration.component';
import { DashboardComponent } from './components/template/dashboard/dashboard.component';
import { UsercreateComponent } from './components/user/usercreate/usercreate.component';
import { UsereditComponent } from './components/user/useredit/useredit.component';
import { UserComponent } from './components/user/userindex/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login',pathMatch:'full' },
  {
    path: 'dashboard',component:DashboardComponent
  },
  {
    path: 'login',component:LoginComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path: 'userindex',component:UserComponent
  },
  {
    path: 'usercreate',component:UsercreateComponent
  },
  {
    path:'useredit/:id',component:UsereditComponent
  }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
