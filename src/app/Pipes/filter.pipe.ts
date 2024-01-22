import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../Models/Student';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: Student[], filterValue: string) {
    if (filterValue.toLowerCase() === 'all' || filterValue === '' || list.length === 0) {
      return list;
    } else {
      return list.filter((data) => {
        return data.gender.toLowerCase() === filterValue.toLowerCase();
      })
    }
  }
}
