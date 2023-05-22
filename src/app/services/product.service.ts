import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`)
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:3000/products`, product)
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product)
  }
  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`)
  }
  relatedProducts(categoryId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/categories/${categoryId}?_embed=products`)
  }
}

