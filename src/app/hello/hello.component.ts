import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  myName: string = "Dat";
  myAge: number = 20;
  myInfo = {
    name: "Kien",
    age: 30
  }
}
