import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  // @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product: IProduct = {
    name: "",
    price: 0,
    status: true
  }
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // lấy id trên url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // nếu có id thì call service get product để lấy thông tin trả về form
    this.productService.getProduct(id).subscribe(data => this.product = data);
  }
  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      // call services edit product
      // nếu thành công thì trả về sản phẩm vừa cập nhật xong
      this.productService.updateProduct(this.product).subscribe(data => console.log(data))
    } else {
      // call service add product
      this.productService.addProduct(this.product).subscribe(data => {
        // chuyển hướng router
        this.router.navigateByUrl('/product');
      })
    }
  }
}
