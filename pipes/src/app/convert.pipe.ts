import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  milestokm: number = 1.60934;

  transform(value: any, targetUnits: string): any {

    if(!value){
      return;
    }

    switch(targetUnits){
      case 'm':
        return value * this.milestokm * 1000;
        case 'cm':
          return value * this.milestokm * 100000;
        case 'km':
          return value * this.milestokm;
      default:
        throw new Error('Target unit is not supported');
    }
  }

}
