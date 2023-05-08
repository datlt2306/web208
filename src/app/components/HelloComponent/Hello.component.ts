import { Component } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './Hello.component.html',
    styleUrls: ['./Hello.component.scss']
})
export class HelloComponent {
    title: string = 'Hello';
}
