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
    const token = JSON.parse(localStorage.getItem('user')!)?.accessToken || null
    // Nếu không có token thì gửi request lên bình thường
    // Ví dụ trong trường hợp đăng ký thì không cần token gửi lên
    if (!token) return next.handle(request)
    // Nếu có token thì thêm token vào header
    const modifyRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(modifyRequest);
  }
}
