import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product!: IProduct;
  @Output() onRemove = new EventEmitter();
  showId(id: any) {
    this.onRemove.emit(id);
  }
}
