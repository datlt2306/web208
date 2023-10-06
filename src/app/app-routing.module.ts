import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { productAdminRoutes, productWebsiteRoutes } from './routes/product.route';

const routes: Routes = [
  {
    path: "", component: BaseLayoutComponent, children: [
      { path: "", component: HomeComponent },
      { path: "contact", component: ContactComponent },
      ...productWebsiteRoutes
    ],
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      ...productAdminRoutes
    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
