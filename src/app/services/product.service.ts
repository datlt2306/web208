import { Injectable } from '@angular/core';
import data from '../data';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  getProduct(id: any) {
    return data.find(item => item.id == id)
  }
  getProductList() {
    return data;
  }
  removeProduct() {

  }
  addProduct() {

  }
  updateProduct() {

  }
}
