import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Product';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = `http://localhost:8080/api`;
  token = JSON.parse(localStorage.getItem('userInfo') || '{}').accessToken

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}/products`)
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/products/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}/products/`, product)
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/products/${product._id}`, product)
  }
  deleteProduct(id: any): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/products/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.token}`)
    })
  }
  relatedProducts(categoryId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/categories/${categoryId}?_embed=products`)
  }
}

