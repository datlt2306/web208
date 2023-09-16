import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: Array<any>, searchTxt: string): Array<any> {
    function getData(value: any, index: any) {
      if (value.name.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1) {
        return data[index];
      }
    };
    return data.filter(getData);
  }

}
