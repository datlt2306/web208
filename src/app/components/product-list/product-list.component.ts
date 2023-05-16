import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: IProduct[] = [];
  @Output() onRemove = new EventEmitter<any>();
  removeItem(id: any) {
    this.onRemove.emit(id)

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