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
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    this.router.params.subscribe(({ id }) => {
      this.productService.getItemById(id).subscribe({
        next: (data: IProduct) => { this.product = data },
        error: (error: any) => console.log(error.message)
      })
    })
  }
}
