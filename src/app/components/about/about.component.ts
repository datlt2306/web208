import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  message: string = "Hello các bạn"
  constructor() { }

  ngOnInit(): void {
  }

}
