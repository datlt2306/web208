import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    products: IProduct[] = [
        { _id: 1, name: "Product A", price: 200, img: "Anh" },
        { _id: 2, name: "Product B", price: 300, img: "Anh" },
        { _id: 3, name: "Product C", price: 400, img: "Anh" }
    ]
    onHandleRemove(id: any) {
        this.products = this.products.filter(item => item._id !== id);
    }
}

// logic, view, stylesheet
// .ts, .html, .scss


// function Component({products, onRemove}){
//   return <button onClick={() => onRemove(id)}>
// }

// app.js
// <Component products={products} onRemove={onHandleRemove}/>