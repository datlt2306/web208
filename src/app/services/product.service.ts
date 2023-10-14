import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:8080/api/products`)
  }
  /* 
    json-server : IProduct[]
    nodejs: { 
      data: {
        docs: IProduct[]
      }
    }
  */
  getProductById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:8080/api/products/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:8080/api/products`, product)
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:8080/api/products/${product._id}`, product)
  }
  removeProduct(id: string): Observable<{ message: string, data: IProduct }> {
    return this.http.delete<{ message: string, data: IProduct }>(`http://localhost:8080/api/products/${id}`)
  }
}
