import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  //HttpClient httpClient=new HttpClient();
  //HttpCient Interface will connect to back end and get the response from the backend
  //HTTPClient will communicate with JSON Response

  constructor(private httpClient:HttpClient) { }


  public getCountriesData():Observable<any>{

    return this.httpClient.get("https://restcountries.com/v3.1/region/europe");

  }
}
