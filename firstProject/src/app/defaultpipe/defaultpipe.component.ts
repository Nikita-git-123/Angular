import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-defaultpipe',
  imports: [CommonModule,ReversePipe],
  templateUrl: './defaultpipe.component.html',
  styleUrl: './defaultpipe.component.css'
})
export class DefaultpipeComponent {

  var_one:string="angular";
  var_two:string="REACT JS";
  var_three:string="NODE JS";
  var_four:number=100.12345;
  var_five:number=100;
  var_six:Date=new Date();
  var_eight:any={num:100};
  var_nine:any;
  constructor(){
    this.var_nine=new Promise(
      (resolve,reject)=>{
        resolve("We have a Class Tomarrow")
      }
    )
  }

}
