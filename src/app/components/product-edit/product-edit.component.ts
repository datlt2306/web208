import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  @Input('data') product: any;
  @Output() onRemove = new EventEmitter<any>

  onHandleRemove(id: any) {
    this.onRemove.emit(id)
  }
}




// <ShowProduct product={state} onRemove={onHandleRemove} />

// function ShowProduct({ product, onRemove }) {
//   return (
//     <div>
//     {
//       product.map(item => <div>
//         {item.name }
//         <button onClick = {() => onRemove(item.id)} > remove < /button>
//     </div>)}
//     </div>
//   )
// }
