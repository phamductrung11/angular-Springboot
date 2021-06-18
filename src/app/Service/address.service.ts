import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../Model/address';
@Injectable({
  providedIn: 'root'
})
export class AddressService  {
  public API: string = "http://localhost:8080/api/";

  constructor(
    public http: HttpClient
  ) { }
  getAddress(): Observable<Address> {
    return this.http.get<Address>(this.API+'addresses')
  }
  postAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.API+'addresses',address);
  }
  updateAddress(address: Address): Observable<Address> {
    return this.http.get<Address>(this.API + address)
  }
}
