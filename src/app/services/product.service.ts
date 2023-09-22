import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = `https://6110f09bc38a0900171f0ed0.mockapi.io/product`

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL);
  }
  removeItem(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
}
