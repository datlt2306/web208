import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0]
  });
  product!: IProduct;
  mode!: 'create' | 'update';
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
  }

  async ngOnInit() {

    const { id } = this.router.snapshot.params;
    if (id) {
      try {
        // call API to get product by id
        this.product = await firstValueFrom(this.productService.getProductById(id));
        // set value for Form
        this.productForm.patchValue(this.product as any);
        this.mode = 'update';
      } catch (error: any) {
        console.log(error.message)
      }
    }
  }
  async onHandleSubmit() {
    if (this.productForm.invalid) return;


    if (this.mode === 'update') {
      const product: any = { ...this.product, ...this.productForm.value };
      await firstValueFrom(this.productService.updateProduct(product))
      alert('Update product successfully!')
    } else {
      await firstValueFrom(this.productService.addProduct(this.productForm.value as IProduct))
      alert('Create product successfully!')
    }

  }
  // Bonus: Tạo Component và Khai báo routing
  // B1: Lấy ID trên url
  // B2: Call API để lấy thông tin chi tiết của sản phẩm
  // B3: Hiển thị thông tin chi tiết của sản phẩm lên form
  // B4: Khi người dùng submit form => gọi API để cập nhật thông tin sản phẩm
}
