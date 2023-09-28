import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { ChangeNumberToTextPipe } from './change-number-to-text.pipe';
import { SearchBoxPipe } from './search-box.pipe';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
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
    ProductAddComponent,
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
