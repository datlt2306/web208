import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  // @Output() onNewEvent = new EventEmitter();
  // product: IProduct = {
  //   id: 0,
  //   name: ""
  // };
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  })
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {

  }
  onHandleAdd() {
    console.log('formAdd', this.productForm.value.name);
    // this.onNewEvent.emit(this.content)
    // this.productService.addProduct(this.product).subscribe(item => {
    //   console.log('1');
    // })
  }
}
