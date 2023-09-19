import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { ChangeNumberToTextPipe } from './change-number-to-text.pipe';
import { SearchBoxPipe } from './search-box.pipe';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ChangeNumberToTextPipe,
    SearchBoxPipe,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
