import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    // Nested Routes
    path: "", component: BaseLayoutComponent, children: [
      { path: "product", component: ProductComponent },
      { path: "contact", component: ContactComponent },
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
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