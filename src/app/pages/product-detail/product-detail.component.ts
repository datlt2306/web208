import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../interfaces/Product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    // Observable
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      })
    })
  }
}


// import { useParams } from 'react-router-dom';

// const { id } = useParams();
