import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/HelloComponent/Hello.component';
import { Hello2Component } from './components/hello2/hello2.component';
import { BrowserModule } from '@angular/platform-browser';

// decorators
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Hello2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
