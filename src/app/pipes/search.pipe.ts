import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
/*
 * Filter array of place by string
 * Item should contain name property
 */
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    if (!args) {
      return value;
    }

    // tslint:disable-next-line:no-parameter-reassignment
    args = args.toLowerCase();
    return value.filter((item) => {
      return item.name.toLowerCase().indexOf(args) !== -1;
    });
  }
}
