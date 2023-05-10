import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [
    { _id: 1, name: 'Product 1', price: 100, img: "https://picsum.photos/200/200" },
    { _id: 2, name: 'Product 2', price: 200, img: "https://picsum.photos/200/200" },
    { _id: 3, name: 'Product 3', price: 300, img: "https://picsum.photos/200/200" },
  ]

  myName: string = "";

  status: boolean = false

  setValue(e: any) {
    this.myName = e.target.value;
  }
  toggle() {
    this.status = !this.status
  }
}
