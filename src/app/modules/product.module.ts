import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../components/products/products.component';
import { SearchBoxPipe } from '../search-box.pipe';
import { ChangeNumberToTextPipe } from '../change-number-to-text.pipe';
import { ProductComponent } from '../pages/product/product.component';
import { ProductAddComponent } from '../pages/product-add/product-add.component';
import { ProductDetailComponent } from '../pages/product-detail/product-detail.component';
import { ProductFormComponent } from '../components/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { adminRoutes, productRoutes } from '../routes/product.routes';

const combineRoutes = [
  ...productRoutes,
  ...adminRoutes
]

@NgModule({
  declarations: [
    ProductsComponent,
    SearchBoxPipe,
    ChangeNumberToTextPipe,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(combineRoutes)
  ]
})
export class ProductModule { }
