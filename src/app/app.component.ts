import { Component } from '@angular/core';
import data from './data';
import { IProduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: IProduct[] = data;

  onHandleAdd(product: any) {
    console.log(product);
    this.productList.push(product);
  }
}
