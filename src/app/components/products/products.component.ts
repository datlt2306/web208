import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

// metada
// @decorator -> typescript -> typeorm

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchText: string = "";
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  removeProduct(id: number | string) {
    const confirm = window.confirm('Are you fucking sure?');
    if (confirm) this.products = this.products.filter(item => item.id != id);
  }
  onHandleRemove(id: any) {
    console.log(id);
    // 
  }
}


// ng g s ten_service
// inject vào component