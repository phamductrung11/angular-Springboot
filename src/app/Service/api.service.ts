import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/products';
@Injectable({
  providedIn: 'root'
})
export class ApiService   {
  public product :Product[]=[]
  public API: string = "http://localhost:8080/api/";

  constructor(
    public http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API + 'products');
  }
  getById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.API}products/${id}`);
  }
  addProducts(product:Product): Observable<Product> {
    return this.http.post<Product>(this.API + 'products', product);
  }
  updateProducts(product: any): Observable<Product> {
    return this.http.put<Product>(`${this.API}products/${product.id}`, {
      description: product.description,
      price: product.price,
      name: product.name,
      quantity: product.quantity,
      userId: product.userId

    });
  }
  deleteProducts(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API + `products/${id}`);
  }
  handleError(err){
    if (err.error instanceof Error) {
      console.log(`client-side error: ${err.error.message}`)
    }else{
      console.log(`Serve-side error: ${err.status} -${err.error}`)
    }
  }



}
