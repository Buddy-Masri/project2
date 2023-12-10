import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
})
export class AppendPipe implements PipeTransform {
  transform(value: number, arg1: any) {
    return '$ today= ' + value * arg1;
  }
}
