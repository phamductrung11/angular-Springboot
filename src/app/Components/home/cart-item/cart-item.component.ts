import { AuthService } from './../../../Service/auth.service';
import { Product } from 'src/app/Model/products';
import { ApiService } from './../../../Service/api.service';
import { Order } from './../../../Model/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  public orderCart: any = new Order();
  public cart: any = [];
  public total: number;
  constructor(
    public authService: AuthService,
    public router: Router,
    public orderService: OrderService,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.loadCart();
    this.cartToTal();
  }
  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.cart = JSON.parse(localStorage.getItem('localCart') || '');
    }

  }
  cartToTal() {
    var result = 0
    this.cart.forEach(item => {
      result += item.quantity * item.productPrice
    });
    this.total = result;
  }

  update(id: number, quantity: number) {
    var result = 0;
    let local = JSON.parse(localStorage.getItem('localCart') || '');
    local.forEach((element: any) => {
      if (element.productId == id) {
        result = element.quantity = quantity
      }
    });
    localStorage.setItem('localCart', JSON.stringify(local));
    this.loadCart();
    this.cartToTal();
  }
  delete(id: number) {

    let local = JSON.parse(localStorage.getItem('localCart') || '');
    var index = local.find((item: any) => item.productId == id)
    local.splice(index, 1);
    localStorage.setItem('localCart', JSON.stringify(local));
    this.loadCart();
    this.cartToTal();
  }

  checkout() {

    this.orderCart.userId = parseInt(this.authService.getuser_id());
    this.orderCart.orderDetails = this.cart
    this.orderService.addOrder(this.orderCart).subscribe(data => {

      localStorage.removeItem('localCart');
      this.router.navigateByUrl('home/address');
    })
  }




}
