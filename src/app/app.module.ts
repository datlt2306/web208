import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavComponent } from './components/nav/nav.component';
// decorators typescript
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomePageComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
