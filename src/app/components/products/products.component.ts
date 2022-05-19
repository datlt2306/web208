

import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: IProduct[]
  constructor(private productService: ProductService) {
    this.productService.getProductList().subscribe(data => {
      this.products = data
    });
  }

  ngOnInit(): void {
  }

}