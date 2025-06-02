import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {

  public countriesRes:any;

  constructor(private countriesService:CountriesService){}

  ngOnInit(){

    this.countriesService.getCountriesData().subscribe(
      {
        next:(posRes:any)=>{
          console.log("Countries Service Call Sucessfully Completed")
          this.countriesRes=posRes;
          console.log("Countries Data From Back End ", this.countriesRes);
        },
        error:(e)=>{
          console.log("Error in Communicating Back End API ",e);
        },
        complete(){
          console.log("Countries Call is Completed")
        }
      }

    )
  }



}
