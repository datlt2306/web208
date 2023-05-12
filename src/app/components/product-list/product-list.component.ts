import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [
    { _id: 1, name: "Product A", price: 200, img: "https://picsum.photos/200/200" },
    { _id: 2, name: "Product B", price: 300, img: "https://picsum.photos/200/200" },
    { _id: 3, name: "Product C", price: 400, img: "https://picsum.photos/200/200" },
  ]

  status: boolean = false;
  productName = "";

  product!: IProduct;

  getValue(e: any) {
    this.productName = e.target.value;
  }
  changeStatus() {
    this.status = !this.status;
  }
  removeItem(id: any) {
    this.products = this.products.filter(item => item._id !== id)
  }
}
