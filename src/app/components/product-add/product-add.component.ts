import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService) {

    this.productForm = this.formBuilder.group({
      name: [''],
      price: [0],
    })

  }
  productForm!: FormGroup;

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
      }
      this.productService.addProduct(product).subscribe(data => {
        console.log(data)
      })
    }
  }
}
