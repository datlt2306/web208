import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { ChangeNumberToTextPipe } from './change-number-to-text.pipe';
import { SearchBoxPipe } from './search-box.pipe';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './component/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ChangeNumberToTextPipe,
    SearchBoxPipe,
    ProductDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
