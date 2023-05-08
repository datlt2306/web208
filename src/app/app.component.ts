import { Component } from '@angular/core';
// decorators
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Angular';
  myName: string = "Le Trong Dat";
  myStatus: boolean = false
}



// function Component(){
//   return <div>1</div>
// }
// <Component />