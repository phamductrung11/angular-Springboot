import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/products';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public API: string = "http://localhost:8080/api/";

  constructor(
    public http: HttpClient
  ) { }
  loadProducts(): Observable<Product> {
    return this.http.get<Product>(this.API + 'products');
  }
  addProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API + 'products', product);
  }
  updateProducts(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}products/${product.productid}`, {
      description: product.description,
      price: product.price,
      productname: product.productname,
      quantity: product.quantity,
      productimage: product.productimage
    });
  }
  deleteProducts(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API + `products/${id}`);
  }
}
