import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  var_one = "Welcome to Angular from Ashok IT.....";

  controlFlag:boolean=true;

  userName:string="";
  firstName:string="";
  lastName:string="";
  email:string="";

  dateString:string="";

  constructor() {
    this.userName="Nikita12345";
    this.firstName="Nikita";
    this.lastName="Patil";
    this.email="Nik@gmail.com";

    setInterval( () => {
      let currentDate = new Date();
      this.dateString=currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
      this.controlFlag=Math.random() > 0.5 ? true : false;
    },1000)
  }

  getUserName():string {
    return this.userName;
  }

  getFirstName():string {
    return this.firstName;
  }

  getLastName():string {
    return this.lastName;
  }

  getEmail():string {
    return this.email;
  }


updateName(empName:string) {
  this.userName=empName;
}
}
