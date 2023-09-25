import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: "", component: BaseLayoutComponent, children: [
      // localhost:4200/products
      { path: "products", component: ProductsComponent },
      { path: "products/:id", component: ProductDetailComponent }
    ],
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      // localhost:4200/admin/products
      { path: "products", component: ProductsComponent }
    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
