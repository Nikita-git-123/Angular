import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent  implements
OnInit,OnChanges,DoCheck,AfterViewInit,AfterContentInit,AfterViewChecked,AfterContentChecked,
OnDestroy{


  order=1;

  constructor(){
    console.log('I am from constructor() !! and my order is :: '+ this.order);
    this.order++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('I am from NGOnChanges and my order is :: '+ this.order);
    this.order++;
  }

  ngOnInit(): void {
    console.log('I am from NGOnInit and my order is :: '+ this.order);
    this.order++;
  }

  ngDoCheck(): void {
    console.log('I am from NGDoCheck and my order is :: '+ this.order);
    this.order++;
  }

  ngAfterContentInit(): void {
    console.log('I am from NGAfterContentInit and my order is :: '+ this.order);
    this.order++;
  }


  ngAfterContentChecked(): void {
    console.log('I am from NGAfterContentChecked and my order is :: '+ this.order);
    this.order++;
  }

  ngAfterViewInit(): void {
    console.log('I am from NGAfterViewInit and my order is :: '+ this.order);
    this.order++;
  }

  ngAfterViewChecked(): void {
    console.log('I am from NGAfterViewchecked and my order is :: '+ this.order);
    this.order++;
  }
  ngOnDestroy(): void {
    console.log('I am from NGOnDestroy and my order is :: '+ this.order);
    this.order++;
  }
}
