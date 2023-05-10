import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  myName: string = "";

  showName() {
    this.myName = "Le Trong Dat";
  }
}
