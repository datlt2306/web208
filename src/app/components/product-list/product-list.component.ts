import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products!: IProduct[]
  myName: string = "";

  status: boolean = false

  setValue(e: any) {
    this.myName = e.target.value;
  }
  toggle() {
    this.status = !this.status
  }

  removeItem(id: number) {
    this.products = this.products.filter(product => product._id !== id)
  }
}



// ProductList.js
// function ProductList({ products, onRemove }) {
//   return <div>
//     {
//       products.map(product => product.name)
//         < /div>
//     }

// App.js

// <ProductList products={ state } />
// <app-product-list [products]="products" />
