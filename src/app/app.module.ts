import { TokenInterceptor } from './rest/token-interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ApiService} from './Service/api.service';
import {AuthService} from './Service/auth.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
import { AuthGuard } from './Service/auth.guard';

const appRoute :Routes=[
  { path: '',
  redirectTo: '/login',
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
component: AdminComponent,
canActivate:[AuthGuard]
}
,
{
path:'home',
component: HomeComponent,
canActivate:[AuthGuard]
},
{
  path:'navigation',
component: NavigationComponent
},
{
  path:'home/cart',
  component: CartItemComponent,
  canActivate:[AuthGuard]
},
{
  path:'home/address',
  component: AddressComponent,
  canActivate:[AuthGuard]
},
{
  path:'admin/edit',
  component: EditItemComponent,
  canActivate:[AuthGuard]
},
{
  path:'admin/order',
  component: OrderItemComponent,
  canActivate:[AuthGuard]
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
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    CommonModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  ApiService,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
