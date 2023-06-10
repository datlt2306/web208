import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Product';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = `http://localhost:8080/api`
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}/products`)
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}`, product)
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/${product.id}`, product)
  }
  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
  relatedProducts(categoryId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/categories/${categoryId}?_embed=products`)
  }
}

