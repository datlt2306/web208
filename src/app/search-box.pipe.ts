import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './interfaces/product';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: IProduct[], searchText: string) {
    return data.filter((item: any) => item.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
  }
}


