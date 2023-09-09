import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Summaryclass } from '../classes/summaryclass';
import { Summaryclass2 } from '../classes/summaryclass2';

@Injectable({
  providedIn: 'root'
})
export class SummarypageserviceService {

  constructor(private httpCLient:HttpClient) { }

  
  url: string ="http://localhost:8080/emergency/relatives/"
  getmedicine(userName:any){

    return this.httpCLient.get(`${this.url}${userName}`); 
  }
  
  url2: string ="http://localhost:8080/emergency/current-medicine/"
  getmedicine2(userName:any){

    return this.httpCLient.get<Summaryclass2[]>(`${this.url2}${userName}`); 
  }



}
