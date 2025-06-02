import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-simplechanges',
  standalone: true,
  imports: [],
  templateUrl: './simplechanges.component.html',
  styleUrl: './simplechanges.component.css'
})
export class SimplechangesComponent implements OnInit,OnChanges{


  @Input()
  simpleInput:string="";

  constructor(){

  }
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
      for(let propName in changes){
        let change=changes[propName];
        let currentValue=JSON.stringify(change.currentValue);
        let previousValue=JSON.stringify(change.previousValue);
        console.log("Property Name "+propName + " Current Value ==> " + currentValue + " Previous Value ==> " + previousValue);
        
      }

  }

}
