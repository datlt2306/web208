import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  names = ['kien', 'dat'];
  products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" }
  ]

  onProductName(newItem: any) {
    this.names.push(newItem);
    console.log(this.names)
  }
}