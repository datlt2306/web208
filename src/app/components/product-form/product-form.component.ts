import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    price: [0]
  });
  product!: IProduct;
  mode: "create" | "update" = "create";

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute) {
    this.router.params.subscribe(({ id }) => {
      if (id) {
        this.mode = "update";
        this.productService.getProductById(id).subscribe({
          next: (product: any) => {
            this.product = product;
            this.productForm.patchValue(product);
          }
        })
      }
    })
  }

  onHandleSubmit() {
    if (this.productForm.invalid) return;
    if (this.mode === 'create') {
      this.productService.addProduct(this.productForm.value as IProduct).subscribe({
        complete: () => console.log('thêm thành công')
      })
    }
    const product = { id: this.product.id, ...this.productForm.value };
    this.productService.editProduct(product as IProduct).subscribe({
      complete: () => console.log('sửa thành công')
    });
  }
}


// B1: Tạo router
// B2: Lấy ID trên url
// B3: Call API dựa trên id để lấy thông tin sản phẩm
// B4: Dựa vào thông tin lấy được, hiển thị ra form ở ngoài
// B5: Cập nhật thông tin sản phẩm