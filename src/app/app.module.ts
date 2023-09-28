import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeNumberToTextPipe } from './change-number-to-text.pipe';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchBoxPipe } from './search-box.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ChangeNumberToTextPipe,
    SearchBoxPipe,
    ProductDetailComponent,
    NotFoundComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    HomePageComponent,
    DashboardComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
