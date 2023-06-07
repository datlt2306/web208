import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.productService.getProduct(id).subscribe(product => {
        // Sản phẩm dựa theo ID
        this.product = product;

        this.productForm.patchValue({
          name: product.name,
          price: product.price
        })
      })
    })

  }
  onHandleEdit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
      }

      this.productService.updateProduct(product).subscribe(data => {
        console.log(data)
      })
    }

  }
}
