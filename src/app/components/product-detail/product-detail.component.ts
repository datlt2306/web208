import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: IProduct;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    this.router.params.subscribe(({ id }) => {
      this.productService.getProductById(+id).subscribe({
        next: (data) => this.product = data,
        error: (err) => console.log(err.message)
      })
    });
  }
}
