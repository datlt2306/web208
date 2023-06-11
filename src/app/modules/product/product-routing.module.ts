import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from 'src/app/components/product-add/product-add.component';
import { ProductEditComponent } from 'src/app/components/product-edit/product-edit.component';
import { ManageProductComponent } from 'src/app/pages/admin/manage-product/manage-product.component';

const routes: Routes = [
  { path: 'product', component: ManageProductComponent },
  { path: "product/add", component: ProductAddComponent },
  { path: 'product/:id/edit', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
  static routes = routes;
}
