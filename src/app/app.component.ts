import { Component } from '@angular/core';
import { IStudent } from './interfaces/student';

@Component({
  // Định nghĩa 1 element cho component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student: IStudent = {
    // key: value
    name: 'John Doe',
    age: 20,
    imageUrl: 'https://picsum.photos/200/300',
    status: true,
    address: {
      street: '123 Main St',
      city: 'Boston',
      state: 'MA'
    }
  }

  showStudentName() {
    return this.student.name
  }
  setName(newName: string) {
    this.student.name = newName
  }
}