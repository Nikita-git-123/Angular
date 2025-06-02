import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(dobYear: any): number {
    
    //We need to write logic to calculate Age 
    let currentYear:any=new Date().getFullYear(); // 2024 Full Year
    let inputYear:any=new Date(dobYear).getFullYear(); //Input Date Full Year
    return currentYear-inputYear;
  }

}
