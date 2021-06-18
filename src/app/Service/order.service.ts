import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order} from '../Model/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public API: string = "http://localhost:8080/api/";
  constructor(
    public http: HttpClient
  ) { }

  loadOrder(): Observable<any> {
    return this.http.get<any>(this.API + 'orders');
  }
  addOrder(order: any): Observable<any> {
    order.productId
    return this.http.post<any>(this.API + 'orders', order);
  }
  updateOrder(order: any): Observable<any> {
    return this.http.put<any>(`${this.API}orders/state/${order.id}`,order)
  }
  deleteOrder(id: number): Observable<any> {
    return this.http.delete<any>(this.API +`orders/delete/${id}`)
  }
}
