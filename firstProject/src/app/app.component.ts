import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { VisitingCardComponent } from './visiting-card/visiting-card.component';
import { user } from './user';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, SecondComponent, VisitingCardComponent, EmpdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
  uname:string="Poonam";


  userInput:user = new user();

  constructor() {

    this.userInput.name="Nikita",
    this.userInput.title="Software Developer",
    this.userInput.salary="10000",
    this.userInput.department="2",
    this.userInput.address=["Mumbra", "Thane"],
    this.userInput.phone=['123456789', '987654321']
  }
}
