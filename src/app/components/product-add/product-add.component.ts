import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product = {
    name: '',
    price: 0,
  };
  onHandleAdd() {
    console.log(this.product);
  }
}
