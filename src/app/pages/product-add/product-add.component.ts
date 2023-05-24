import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  // product: IProduct = {
  //   name: "",
  //   price: 0,
  //   img: ""
  // }
  // constructor(private productService: ProductService) {

  // }

  // onHandleAdd() {
  //   this.productService.addProduct(this.product).subscribe(product => {
  //     console.log(product)
  //   })
  // }
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
  })
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder) { }

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
      }
      this.productService.addProduct(product).subscribe(product => {
        console.log('Thành công', product)
      })
    }

  }
}
