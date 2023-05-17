import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  status: boolean = false;
  productName = "";
  products: IProduct[] = []

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })

    this.productService.getProduct(1).subscribe(data => {
      console.log(data);
    })
  }

  product!: IProduct;

  getValue(e: any) {
    this.productName = e.target.value;
  }
  changeStatus() {
    this.status = !this.status;
  }
  removeItem(id: any) {
    // this.products = this.products.filter(item => item._id !== id)
  }
}
