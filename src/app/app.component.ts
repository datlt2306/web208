import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';

@Component({
    selector: 'app-root', // định nghĩa element
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    products: IProduct[] = [
        { id: 1, name: "Sản phẩm A", price: 200, img: "Ảnh" },
        { id: 2, name: "Sản phẩm B", price: 300, img: "Ảnh" }
    ]
    onHandleRemove(id: any) {
        this.products = this.products.filter(item => item.id !== id);
    }
}
