import { Component } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    title = "Quản lý sản phẩm";
    status: boolean = false;

    handleClick() {
        this.status = !this.status;
    }

    setValue(e: any) {
        this.title = e.target.value
    }
}
