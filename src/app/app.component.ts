import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

}


// // ProductList.js
// function ProductList({ products, onRemove }) {
//     return (
//         <div>
//         { products.map((item) => ()}
//  <button onClick={() => onRemove(item.id)}></button>
//         < /div>
//     )
// }

// // App.js
// <ProductList products={ array } onRemove={onHandleRemove} />