import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { LoginComponent } from './Components/login/login.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { RegisterComponent } from './Components/register/register.component';
import {Router, Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './Components/home/product/product.component';
import { AddressComponent } from './Components/home/address/address.component';
import { CartItemComponent } from './Components/home/cart-item/cart-item.component';
import { EditItemComponent } from './Components/admin/edit-item/edit-item.component';
import { OrderItemComponent } from './Components/admin/order-item/order-item.component';

const appRoute :Routes=[
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
path:'login',
component: LoginComponent
},
{
path:'register',
component: RegisterComponent
},
{
path:'admin',
component: AdminComponent
}
,
{
path:'home',
component: HomeComponent,
// canActivate:[AuthguardGuard]
},
{
  path:'navigation',
component: NavigationComponent
},
{
  path:'home/cart',
  component: CartItemComponent,
  // canActivate:[AuthguardGuard]
},
{
  path:'home/address',
  component: AddressComponent,
  // canActivate:[AuthguardGuard]
},
{
  path:'admin/edit',
  component: EditItemComponent,
  // canActivate:[AuthguardGuard]
},
{
  path:'admin/order',
  component: OrderItemComponent,
  // canActivate:[AuthguardGuard]
}


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NavigationComponent,
    RegisterComponent,
    ProductComponent,
    AddressComponent,
    CartItemComponent,
    EditItemComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
