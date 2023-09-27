import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0]
  })
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService) {

  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      this.productService.addItem(this.productForm.value as IProduct).subscribe();
    }
  }
}
