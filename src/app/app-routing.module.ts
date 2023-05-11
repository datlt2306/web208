import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "products", component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
