import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: IProduct[] = [];
  // title = 'Quản lý sản phẩm';
  // status: boolean = false;
  // valueInput: string = "";

  toggle() {
    // this.status = !this.status;
  }
  setValue(e: any) {
    // this.valueInput = e.target.value;
  }

  removeItem(id: any) {
    this.products = this.products.filter((item) => item._id !== id);
  }
}
