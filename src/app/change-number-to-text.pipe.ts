import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeNumberToText'
})
export class ChangeNumberToTextPipe implements PipeTransform {

  transform(value: any) {
    switch (value) {
      case 1:
        return `Số một`
      case 2:
        return `Số 2`
      default:
        return `Không biết là gì`
    }
  }

}
