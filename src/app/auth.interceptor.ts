import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Nếu token không được lưu ở localStorage
    const token = JSON.parse(localStorage.getItem('credential') || '{}').accessToken;
    // Thì request header không có Authorization
    if (!token) return next.handle(request);

    // Nếu có token thì thêm Authorization vào header
    const modifyReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(modifyReq);
  }
}
