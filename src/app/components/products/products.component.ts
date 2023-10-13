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

    this.productService.getAll().subscribe({
      next: ({ data }: any) => { 
        this.products = data
       },
      error: (error) => { console.log('error', error.message) },
      complete: () => { console.log('complete') }
    })
  }

  removeProduct(id: number | string) {
    const confirm = window.confirm('Are you fucking sure?');
    if (confirm) this.products = this.products.filter(item => item._id != id);
  }
  onHandleRemove(id: any) {
    console.log(id);
    // 
  }
}


// ng g s ten_service
// inject vào component

