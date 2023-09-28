import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  // productForm = this.form.group({
  //   name: ["", Validators.required],
  //   price: [0]
  // })
  // constructor(
  //   private form: FormBuilder,
  //   private productService: ProductService) {
  // }
  // onHandleSubmit() {
  //   if (this.productForm.valid) {
  //     // Lấy giá trị form 
  //     // gọi service và đẩy dữ liệu lên API
  //     this.productService.addProduct(this.productForm.value as IProduct).subscribe();
  //   }
  // }
}


// dependency injection