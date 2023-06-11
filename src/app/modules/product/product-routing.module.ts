import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductAddComponent } from 'src/app/pages/product-add/product-add.component';
import { ProductEditComponent } from 'src/app/pages/product-edit/product-edit.component';

const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/:id/edit', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
  static routes = routes;
}