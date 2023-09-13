import { Component } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: IProduct = {
    id: 1,
    name: "Product A",
    code: "ABC",
    releaseDate: "10-10-2023",
    price: 1000,
    imageUrl: "https://picsum.photos/200/300"
  }

  value: string = "";


  showName() {
    return this.product.name;
  }
  setName(newName: string) {
    this.product.name = newName;
  }

  changeName(e: any) {
    this.value = e.target.value;
  }
}


