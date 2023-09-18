import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeNumber'
})
export class ChangeNumberPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1:
        return "Một"
      case 2:
        return "Số hai"
      default:
        return "Không là gì"
    }
  }

}
