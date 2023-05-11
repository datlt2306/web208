import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  title = 'Quản lý sản phẩm';
  status: boolean = false;
  valueInput: string = "";


  products: IProduct[] = [
    { _id: 1, name: "Product A", price: 200, img: "ảnh" }
  ]
  toggle() {
    console.log('1')
    this.status = !this.status;
  }
  setValue(e: any) {
    this.valueInput = e.target.value
  }
}
