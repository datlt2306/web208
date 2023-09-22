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
  getItemById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }
  removeItem(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
  addItem(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.API_URL, product)
  }
  updateItem(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`${this.API_URL}/${product.id}`, product)
  }
}
