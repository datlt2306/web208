import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
    name: [''],
    price: [0],
  })
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder) { }

  onHandleSubmit() {
    console.log(this.productForm.value)
  }
}
