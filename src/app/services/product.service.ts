import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = `http://localhost:3000/products`;
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.API}`)
  }
  removeProduct(id: any): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(`${this.API}/${id}`);
  }
  getProduct(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.API}/${id}`);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${this.API}/${product.id}`, product);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(`${this.API}`, product);
  }
}
