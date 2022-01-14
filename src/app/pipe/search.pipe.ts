import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(list: any[], args?: string): any {
    if (!args) return list;
  }
}
