import { EventEmitter, Input } from '@angular/core';
import { Component, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {


  // @Input() products: IProduct[] = [];
  // @Output() onRemove = new EventEmitter<number>();
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    }, error => console.log(error.message))
  }
  removeItem(id: any) {
    // this.onRemove.emit(id);
  }
}


// ProductList.js

// function ProductList({ products, onRemove }){
//   return <div>
//     <button onClick={() => onRemove(id)}></button>
//   </div>
// }

// App.js
// <ProductList products={state} onRemove={onHandleRemove}/>





// function ProductList({products, onRemove}){
//   return (
//     <div>
//       {products.map(item => {
//         return <button onClick={() => onRemove(item.id)}></button>
//       })}
//     </div>
//   )
// }

// <product-list onRemove={handleRemove}/>