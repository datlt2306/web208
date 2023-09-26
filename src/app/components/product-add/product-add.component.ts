import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm = this.fb.group({
    name: ['', Validators.required],
    price: [''],
  })
  constructor(private fb: FormBuilder) {

  }

  onHandleSubmit() {
    console.log(this.productForm.value);
  }
}
