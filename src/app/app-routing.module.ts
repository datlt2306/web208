import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/abc', pathMatch: 'full' },
  { path: 'abc', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'products', component: ProductsComponent, canActivate: [AuthGuard], children: [
      { path: "list", component: ProductListComponent },
    ]
  },
  {
    path: 'product/:id', component: DetailProductComponent
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
