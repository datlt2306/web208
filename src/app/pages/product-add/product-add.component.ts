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
  productForm = this.form.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
  })
  constructor(
    private form: FormBuilder,
    private productService: ProductService
  ) {
  }

  onHandleSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value as IProduct).subscribe({
        next: (data) => console.log(data)
      })
    }
  }
}
