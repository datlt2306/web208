import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductComponent } from './pages/product/product.component';
import { adminRoutes, productRoutes } from './routes/product.routes';

const routes: Routes = [
  {
    // Nested Routes
    path: "", component: BaseLayoutComponent, children: [
      { path: "", component: HomePageComponent },
      { path: "contact", component: ContactComponent },
      ...productRoutes,
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: 'dashboard', component: DashboardComponent },
      ...adminRoutes
    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
using package : react-router-dom

Object

Component
<Routes>
  <Route path="" element={<BaseLayout />}>
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>
*/