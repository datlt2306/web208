import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.productService.getProductById(id).subscribe({
        next: (data) => this.product = data
      });
    });
  }
}
// closure - curryng
