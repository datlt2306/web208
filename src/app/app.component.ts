import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Angular';
  myName: string = "Le Trong Dat";
  myAge: number = 20;
  myStatus: boolean = true;
  myInfo: { name: string, age: number } = {
    name: "Dat",
    age: 20
  };
  showInfo() {
    return this.myName + 'Đẹp trai';
  }
}

// logic, view, stylesheet
// .ts, .html, .scss


// function Component(){
//   return JSX
// }
// <Component />