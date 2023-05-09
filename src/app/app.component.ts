import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // định nghĩa element
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  myName: string = "Le Trong Dat";
  myAge: number = 20;
  myStatus: boolean = true;
  myInfo: { name: string, age: number } = {
    name: "Le Trong Dat",
    age: 20
  };

  showInfo(name: string) {
    return `My name is ${name ? name : this.myName} and I'm ${this.myAge} years old`;
  }
}
