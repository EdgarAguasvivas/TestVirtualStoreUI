import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegistrationComponent } from './components/account/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/template/dashboard/dashboard.component';
import { UserComponent } from './components/user/userindex/user.component';
import { UsercreateComponent } from './components/user/usercreate/usercreate.component';
import { UsereditComponent } from './components/user/useredit/useredit.component';
import { ProductindexComponent } from './components/product/productindex/productindex.component';
import { ProductcreateComponent } from './components/product/productcreate/productcreate.component';
import { ProducteditComponent } from './components/product/productedit/productedit.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ProductlistComponent } from './components/shoppingcart/productlist/productlist.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { FiltersComponent } from './components/shoppingcart/filters/filters.component';
import { CartitemComponent } from './components/shoppingcart/cart/cartitem/cartitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    UserComponent,
    UsercreateComponent,
    UsereditComponent,
    ProductindexComponent,
    ProductcreateComponent,
    ProducteditComponent,
    ShoppingcartComponent,
    ProductlistComponent,
    CartComponent,
    FiltersComponent,    
    CartitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
