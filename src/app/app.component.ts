import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  myName: string = 'Derek';
  myAge: number = 30;
  myStatus: boolean = true;
  myInfo: { name: string, age: number } = {
    name: "Derek",
    age: 30
  };
  showInfo() {
    return this.myAge + 10;
  }
}

// Logic, View, Stylesheet
// .ts, .html, .scss


// function HelloComponent(){

// }

// <HelloComponent />