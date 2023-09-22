import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { SearchBoxPipe } from './search-box.pipe';
import { ChangeNumberPipe } from './change-number.pipe';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';

// github.com/datlt2306/web208
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SearchBoxPipe,
    ChangeNumberPipe,
    ProductEditComponent,
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
