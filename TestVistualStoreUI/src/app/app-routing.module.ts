import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { RegistrationComponent } from './components/account/registration/registration.component';
import { DashboardComponent } from './components/template/dashboard/dashboard.component';

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
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
