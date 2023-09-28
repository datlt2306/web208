import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { lastValueFrom } from 'rxjs'

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
    private router: ActivatedRoute) { }

  async ngOnInit() {
    const { id } = this.router.snapshot.params;
    if (id) {
      this.mode = "update";
      try {
        this.product = await lastValueFrom(this.productService.getProductById(id))
        this.productForm.patchValue(this.product as any);
      } catch (error: any) {
        console.log(error.message)
      }
    }
  }

  async onHandleSubmit() {
    if (this.productForm.invalid) return;
    if (this.mode === 'create') {
      try {
        await lastValueFrom(this.productService.addProduct(this.productForm.value as IProduct))
        console.log('Thêm thành công')
      } catch (error: any) {
        console.log(error.message)
      }
    }
    if (this.mode === 'update') {
      const product = { id: this.product.id, ...this.productForm.value };
      try {
        await lastValueFrom(this.productService.editProduct(product as IProduct))
        console.log('Cập nhật thành công')
      } catch (error: any) {
        console.log(error.message)
      }

    }
  }
}


// B1: Tạo router
// B2: Lấy ID trên url
// B3: Call API dựa trên id để lấy thông tin sản phẩm
// B4: Dựa vào thông tin lấy được, hiển thị ra form ở ngoài
// B5: Cập nhật thông tin sản phẩm