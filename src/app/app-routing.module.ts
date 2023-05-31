import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ManageProductComponent } from './pages/admin/manage-product/manage-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
  {
    path: 'admin', component: LayoutAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ManageProductComponent },
      { path: "product/add", component: ProductAddComponent },
      { path: 'product/:id/edit', component: ProductEditComponent }
    ],
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
