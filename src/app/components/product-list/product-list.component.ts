import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: IProduct[] = [];
  message: string = "";
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      // Nếu thành công thì gán giá trị data vào products
      this.products = data;
    }, error => {
      // gán giá trị error.message vào message và hiển thị ra ngoài
      this.message = error.message
    })
  }
  removeItem(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      // ReRender
      this.products = this.products.filter(item => item.id !== id);
    });
  }
}
