import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminGuard } from './services/guards/admin.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent, },
  {
    path: "product", children: [
      { path: "", redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProductsComponent },
      { path: "add", component: ProductAddComponent },
      { path: ":id", component: ProductDetailComponent },
      { path: "edit/:id", component: ProductAddComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
