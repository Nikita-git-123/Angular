import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-visiting-card',
  imports: [CommonModule],
  templateUrl: './visiting-card.component.html',
  styleUrl: './visiting-card.component.css'
})
export class VisitingCardComponent {

  users:any[]=[];

  @Input('userObj') userObj:user= new user;

  constructor() {
    
  }

  ngOnInit() {

    this.users=[
      {
        name:this.userObj.name,
        title:this.userObj.title,
        salary:this.userObj.salary,
        department:this.userObj.department,
        address:this.userObj.address,
        phones:this.userObj.phone
      },
      {
        name:"Nikita Patil",
        title:"Software Lead",
        salary:"15000",
        department:"1",
        address:[
                  "Mumbra",
                  "Thane"
        ],
        phones:[
                 '11-1111-1111',
                 '22-2222-2222'
        ]
      }
    ]
    
  }

}
