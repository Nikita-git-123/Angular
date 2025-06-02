import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { VisitingCardComponent } from './visiting-card/visiting-card.component';
import { user } from './user';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { DefaultpipeComponent } from './defaultpipe/defaultpipe.component';
import { FormsModule } from '@angular/forms';
import { CclogoDirective } from './cclogo.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SimplechangesComponent } from './simplechanges/simplechanges.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, SecondComponent, VisitingCardComponent, EmpdetailsComponent, DefaultpipeComponent,FormsModule,
    CclogoDirective,LifecycleComponent,SimplechangesComponent,CountriesComponent,HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
  uname:string="Poonam";
  cardNumber:string="";

  userInput:user=new user;
  userText:string="";


  constructor() {

    this.userInput.name="Nikita",
    this.userInput.title="Software Developer",
    this.userInput.salary="10000",
    this.userInput.department="2",
    this.userInput.address=["Mumbra", "Thane"],
    this.userInput.phone=['123456789', '987654321']
  }
}
