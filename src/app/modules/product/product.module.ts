import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProductComponent } from 'src/app/pages/admin/admin-product/admin-product.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductDetailComponent } from 'src/app/pages/product-detail/product-detail.component';
import { ProductAddComponent } from 'src/app/pages/product-add/product-add.component';
import { ProductEditComponent } from 'src/app/pages/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AdminProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
