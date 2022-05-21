import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/Product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // @Input() product!: IProduct
  product!: IProduct
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    const id = this.router.snapshot.paramMap.get('id');
    // this.product = this.productService.getProduct(id)!;
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data
    })
  }

  ngOnInit(): void {
  }

}


