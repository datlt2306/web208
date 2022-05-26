import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  // @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product: IProduct = {
    name: "",
    price: 0,
    status: true
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('submitted!')
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
    })
    // this.createProduct.emit(this.product);
  }
}
