import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product!: IProduct
  constructor() { }

  ngOnInit(): void {
  }

}