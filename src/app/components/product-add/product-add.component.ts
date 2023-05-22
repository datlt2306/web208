import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  // product = {
  //   name: '',
  //   price: 0,
  //   img: "anh"
  // };
  // constructor(private productService: ProductService) {

  // }
  // onHandleAdd() {
  //   this.productService.addProduct(this.product).subscribe((data) => {
  //     console.log(data)
  //   }, error => console.log(error.message))
  // }
  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
  })
  onHandleSubmit() {
    console.log(this.productForm.value)
  }
}
