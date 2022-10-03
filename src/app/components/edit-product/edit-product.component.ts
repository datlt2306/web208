import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product!: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (params) {
        // this.product = this.products.find(item => item.id == id)!;
        this.productService.getProduct(id).subscribe(item => {
          this.product = item;
        })
      }
    });
  }
  onHandleEdit() {
    this.productService.updateProduct(this.product).subscribe(item => {
      console.log('thanh cong', item)
      this.router.navigateByUrl(`/admin/products`);
    })
    // console.log(this.product);
  }

}
