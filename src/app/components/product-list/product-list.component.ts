import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    title = "Quản lý sản phẩm";
    status: boolean = false;
    products: IProduct[] = [
        { _id: 1, name: "Sản phẩm A", price: 200, img: "Ảnh" },
        { _id: 2, name: "Sản phẩm B", price: 300, img: "Ảnh" }
    ]
    handleClick() {
        this.status = !this.status;
    }
    setValue(e: any) {
        this.title = e.target.value
    }
    removeItem(id: any) {
        const confirm = window.confirm('Mày chắc chắn muốn xóa chứ?');
        if (confirm) {
            this.products = this.products.filter(item => item._id !== id);
        }
    }
}
