import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" }
  ]
  product = {
    id: 0,
    name: ""
  }
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (params) {
        this.product = this.products.find(item => item.id == id)!;
      }
    });

  }

}
