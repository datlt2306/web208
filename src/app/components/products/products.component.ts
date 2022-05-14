

import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products!: IProduct[]
  productDetail!: IProduct;
  constructor() { }

  ngOnInit(): void {
  }
  onHandleDelete(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
  onHandleGetInfo(product: IProduct) {
    this.productDetail = product;
    console.log('product', product)
  }
}