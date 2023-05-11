import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  title = 'Quản lý sản phẩm';
  products: IProduct[] = [
    { _id: 1, name: "Sản phẩm A", price: 1000, img: "https://picsum.photos/200/200" },
    { _id: 2, name: "Sản phẩm B", price: 2000, img: "https://picsum.photos/200/200" },
  ]
}
