import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }
  removeItem(id: any) {
    // this.onRemove.emit(id)
  }
}




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