import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

}

// logic, view, stylesheet
// .ts, .html, .scss


// function Component({products, onRemove}){
//   return <button onClick={() => onRemove(id)}>
// }

// app.js
// <Component products={products} onRemove={onHandleRemove}/>