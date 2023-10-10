import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProduct[] = [];
  currentProduct!: IProduct;


  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: ({ data }: any) => {
        // { data: [], pagination: { }}
        this.products = data;
      },
      error: (error) => {
        console.log(error.message)
      }
    })
  }

  searchText: string = "";
  removeItem(id:string) {
    console.log(id);
    const confirm = window.confirm('Are you fucking sure?');
    if (confirm) {
      this.productService.removeProduct(id).subscribe({
        next: (data) => {
          console.log(data);
          console.log('Xóa sản phẩm thành công')
        }
      })
    };
  }
  editProduct(product: IProduct) {
    console.log(product);
    this.currentProduct = product;
  }
  onHandlerRemove(id: any) {
    console.log(id);
  }
}

/**
 * app.jsx
 * function onHandleRemove(id){
 * 	... xóa  phần tử
 * }
 */

// <ShowDetail data={{name: "Product A"}} onRemove={onHandleRemove} />

/*
show-detail.jsx
function ShowDetail({data, onRemove}){
  console.log(data) // {name: "Product A"}
  return (
    {data.map(item => (
      {item.name} <button onClick={() => onRemove(item.id)}>Remove</button>
    ))}
  )
}
*/


