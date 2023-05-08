import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Angular';
  myName: string = "Le Trong Dat";
  myStatus: boolean = true;
  myAge: number = 20
}
