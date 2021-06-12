import { AuthService } from './../Service/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public AuthService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.AuthService.getToken();
    const headerConfig = {
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      };

      if (token) {
        headerConfig['Authorization'] = `Bearer ${token}`;
      }

    request = request.clone({
      setHeaders: headerConfig
    });

    return next.handle(request);
  }
}
