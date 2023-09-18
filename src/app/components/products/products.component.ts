import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    searchText: string = "";
    currentProduct!: IProduct;
    products: IProduct[] = [
        {
            "name": "Practical Frozen Towels",
            "code": "PGK",
            "releaseDate": "2025-06-03T06:34:00.760Z",
            "price": "715.00",
            "imageUrl": "https://loremflickr.com/640/480",
            "id": "1"
        },
        {
            "name": "Recycled Steel Shoes",
            "code": "HNL",
            "releaseDate": "2077-07-16T00:35:11.257Z",
            "price": "579.00",
            "imageUrl": "https://loremflickr.com/640/480",
            "id": "2"
        },
        {
            "name": "Tasty Soft Sausages",
            "code": "GYD",
            "releaseDate": "2090-05-18T17:55:09.229Z",
            "price": "68.00",
            "imageUrl": "https://loremflickr.com/640/480",
            "id": "3"
        },
        {
            "name": "Elegant Concrete Shirt",
            "code": "LVL",
            "releaseDate": "2066-07-09T01:14:10.220Z",
            "price": "658.00",
            "imageUrl": "https://loremflickr.com/640/480",
            "id": "4"
        },
        {
            "name": "Refined Plastic Tuna",
            "code": "TND",
            "releaseDate": "2062-04-29T03:12:44.110Z",
            "price": "836.00",
            "imageUrl": "https://loremflickr.com/640/480",
            "id": "5"
        },
        {
            "name": "Incredible Fresh Car",
            "code": "ISK",
            "releaseDate": "2096-09-22T17:16:35.390Z",
            "price": "31.00",
            "imageUrl": "https://loremflickr.com/640/480",
            "id": "6"
        },
        {
            "name": "Ergonomic Fresh Keyboard",
            "code": "LAK",
            "releaseDate": "2006-10-13T00:07:52.254Z",
            "price": "329.00",
            "imageUrl": "https://loremflickr.com/640/480",
            "id": "7"
        },
        {
            "name": "Bespoke Granite Chair",
            "code": "ERN",
            "releaseDate": "2089-06-12T17:31:12.404Z",
            "price": "169.00",
            "imageUrl": "https://loremflickr.com/640/480",
            "id": "8"
        },
        {
            "name": "Licensed Cotton Keyboard",
            "code": "LVL",
            "releaseDate": "2042-11-08T22:48:17.001Z",
            "price": "905.00",
            "imageUrl": "https://loremflickr.com/640/480",
            "id": "9"
        },
        {
            "name": "Bespoke Soft Bacon",
            "code": "AOA",
            "releaseDate": "2023-06-25T07:29:11.798Z",
            "price": "639.00",
            "imageUrl": "https://loremflickr.com/640/480",
            "id": "10"
        }
    ]
    removeProduct(id: number | string) {
        const confirm = window.confirm('Are you fucking sure?');
        if (confirm) {
            this.products = this.products.filter(item => item.id !== id);
        }

    }
    showProduct(product: IProduct) {
        this.currentProduct = product;
    }
}
