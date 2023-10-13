import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `http://localhost:8080/api/products`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL)
  }
  getProductById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}`, product)
  }
  editProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/${product._id}`, product)
  }
  removeProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }

}
