import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = `http://localhost:8080/api/products`

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<{ data: { docs: IProduct[] }, pagination: {} }> {
    return this.http.get<{ data: { docs: IProduct[] }, pagination: {} }>(this.API_URL);
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
    return this.http.put<IProduct>(`${this.API_URL}/${product._id}`, product)
  }
}
