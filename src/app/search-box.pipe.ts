import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './interfaces/product';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: IProduct[], searchText: string): any {
    return data ? data.filter((item: IProduct) => item.name.toLowerCase().includes(searchText.toLowerCase())) : []
  }

}
