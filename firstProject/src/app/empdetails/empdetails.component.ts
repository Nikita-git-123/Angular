import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-empdetails',
  imports: [CommonModule],
  templateUrl: './empdetails.component.html',
  styleUrl: './empdetails.component.css'
})
export class EmpdetailsComponent {

  employees:any[]=[];

  constructor() {

    this.employees=[

      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
      {id:'101', name:'raju', gender:'male', title:'developer', salary:'12000', department:'technical', address:'thane', dob:'23/04/05'},
    ]

  
  }    
    getLatestData() {
      
      this.employees=[

          {id:'101',name:'Pragati',gender:'Female',title:'Software Developer',salary:'100000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
          {id:'102',name:'Akash',gender:'Male',title:'Sr Software Developer',salary:'120000',department:'2',address:'Chennai',dob:'02/02/1991'},
          {id:'103',name:'Jhansi',gender:'Female',title:'Software Lead',salary:'150000',department:'3',address:'Banglore',dob:'03/03/1989'},
          {id:'104',name:'Hemanth',gender:'Male',title:'Software Manager',salary:'200000',department:'4',address:'Delhi',dob:'04/04/1980'},
          
          {id:'105',name:'Manisha',gender:'Female',title:'Software Developer',salary:'110000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
          {id:'106',name:'Farooq',gender:'Male',title:'Sr Software Developer',salary:'130000',department:'2',address:'Chennai',dob:'02/02/1991'},
          ]

  }

  trackByEmpCode(index:number,employee:any){
    return employee.code;
  }

}
