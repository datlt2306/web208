import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {
    // Nested Routes
    path: "", component: BaseLayoutComponent, children: [
      { path: "", component: HomePageComponent },
      { path: "product", component: ProductComponent },
      { path: "product/:id", component: ProductDetailComponent },
      { path: "contact", component: ContactComponent },
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: 'dashboard', component: DashboardComponent },
      { path: "product", component: ProductsComponent },
      { path: "product/add", component: ProductFormComponent },
      { path: "product/:id/edit", component: ProductFormComponent }

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