import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './interfaces/product';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {
  transform( { docs}: any, searchText: string): IProduct[] {
    return docs ? docs.filter((item: IProduct) => item.name.toLowerCase().includes(searchText.toLowerCase())) : []
  }
}
