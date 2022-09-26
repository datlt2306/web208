import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  @Output() onNewEvent = new EventEmitter();
  content: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  onHandleAdd(event: any) {
    this.onNewEvent.emit(this.content)
  }
}
