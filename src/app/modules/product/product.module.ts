import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from 'src/app/components/product-add/product-add.component';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
import { ProductEditComponent } from 'src/app/components/product-edit/product-edit.component';
import { ProductItemComponent } from 'src/app/components/product-item/product-item.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ManageProductComponent } from 'src/app/pages/admin/manage-product/manage-product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductEditComponent,
    ProductAddComponent,
    ManageProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductModule { }
