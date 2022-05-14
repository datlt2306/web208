import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product: { name: string, price: number } = {
    name: "",
    price: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('submitted!')
    console.log(this.product);
    this.createProduct.emit(this.product);
  }
}
