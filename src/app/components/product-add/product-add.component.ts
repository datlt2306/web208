import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('submitted!')
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(data => {

      // chuyển hướng router
      this.router.navigateByUrl('/product');
    })
    // this.createProduct.emit(this.product);
  }
}
