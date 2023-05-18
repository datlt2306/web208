import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    products: IProduct[] = [
        { _id: 1, name: "Sản phẩm Ahihi", price: 1000, img: "https://picsum.photos/200/200" },
        { _id: 2, name: "Sản phẩm B", price: 2000, img: "https://picsum.photos/200/200" },
        { _id: 3, name: "Sản phẩm C", price: 3000, img: "https://picsum.photos/200/200" },
    ]
    onHandleRemove(id: any) {
        this.products = this.products.filter((item) => item._id !== id);
    }
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