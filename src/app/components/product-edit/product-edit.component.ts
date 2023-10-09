import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

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
  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    this.router.params.subscribe(({ id }) => {
      this.productService.getItemById(id).subscribe({
        next: (product: any) => {
          this.product = product;
          this.productForm.patchValue(product);
        }
      });
    })
  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      this.productService.updateItem({ ...this.productForm.value, id: this.product._id } as IProduct).subscribe({
        complete: () => {
          alert('bạn đã cập nhật thành công')
        }
      });
    }
  }
}




// <ShowProduct product={state} onRemove={onHandleRemove} />

// function ShowProduct({ product, onRemove }) {
//   return (
//     <div>
//     {
//       product.map(item => <div>
//         {item.name }
//         <button onClick = {() => onRemove(item.id)} > remove < /button>
//     </div>)}
//     </div>
//   )
// }
