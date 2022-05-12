import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  componentName: string = "Product Component";
  isStatus: boolean = false;
  productName: string = "";

  productList: IProduct[] = [
    { id: 1, name: "Product A", price: 200, status: false },
    { id: 2, name: "Product B", price: 300, status: true }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onHandleClick() {
    console.log('1')
    this.isStatus = !this.isStatus
  }
  onHandleDelete(id: number) {
    this.productList = this.productList.filter(product => product.id !== id);
  }

  onHandleChange(event: any) {
    // console.log(event.target.value);
    this.productName = event.target.value;
  }
}
/** 
 * const productList = [ { }, { }]
 * productList.map(item => item.name);
*/
