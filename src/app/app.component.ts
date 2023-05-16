import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';

@Component({
  selector: 'app-root', // định nghĩa element
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: IProduct[] = [
    { _id: 1, name: "Sản phẩm A", price: 200, img: "Ảnh" },
    { _id: 2, name: "Sản phẩm B", price: 300, img: "Ảnh" }
  ]

  onHandleRemove(id: any) {
    const confirm = window.confirm('Mày chắc chắn muốn xóa chứ?');
    if (confirm) {
      this.products = this.products.filter(item => item._id !== id);
    }
  }
}
