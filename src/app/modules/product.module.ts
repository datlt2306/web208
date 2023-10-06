import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeNumberPipe } from '../change-number.pipe';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';
import { ProductsComponent } from '../components/products/products.component';
import { SearchBoxPipe } from '../search-box.pipe';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductAddComponent } from '../components/product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { productAdminRoutes, productWebsiteRoutes } from '../routes/product.route';

const combineRoutes = [
  ...productWebsiteRoutes,
  ...productAdminRoutes
]

@NgModule({
  declarations: [
    ChangeNumberPipe,
    ProductEditComponent,
    ProductsComponent,
    SearchBoxPipe,
    ProductDetailComponent,
    ProductAddComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(combineRoutes)
  ]
})
export class ProductModule { }
