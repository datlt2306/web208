import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  // @Input() products!: IProduct[]
  // @Output() onRemove = new EventEmitter<any>();
  products!: IProduct[]
  myName: string = "";

  status: boolean = false;
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      console.log(data)
    })
  }

  setValue(e: any) {
    this.myName = e.target.value;
  }
  toggle() {
    this.status = !this.status
  }

  removeItem(id: number) {
    // this.onRemove.emit(id);
  }
}



// ProductList.js
// function ProductList({ products, onRemove }) {
//   return <div>
//     {
//       products.map(product => product.name)
// <button onClick={() => onRemove(product.id)}>Remove</button>
//         < /div>
//     }

// App.js

// <ProductList products={state} onRemove="onHandleRemove"/>
// <app-product-list [products]="products" />
