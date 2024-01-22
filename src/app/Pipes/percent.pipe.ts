import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent1'
})
export class PercentPipe implements PipeTransform {
  transform(value: any, total:number, decimal:number): unknown {
   return (value / total * 100).toFixed(decimal) + '%';
  }
}
