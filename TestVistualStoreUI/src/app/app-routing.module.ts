import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { RegistrationComponent } from './components/account/registration/registration.component';
import { ProductcreateComponent } from './components/product/productcreate/productcreate.component';
import { ProducteditComponent } from './components/product/productedit/productedit.component';
import { ProductindexComponent } from './components/product/productindex/productindex.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
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
  },  
  {
    path:'productcreate',component:ProductcreateComponent
  },  
  {
    path:'productedit/:id',component:ProducteditComponent
  },  
  {
    path:'productindex',component:ProductindexComponent
  },  
  {
    path:'shop',component:ShoppingcartComponent
  }               
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
