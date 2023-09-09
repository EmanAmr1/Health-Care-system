import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpliServiceService {

  constructor(private httpCLient:HttpClient) { }

 
  url: string ="http://localhost:8080/prescriptions/"
  getspli(userName:any){

    return this.httpCLient.get(`${this.url}${userName}`); 
  }


 


}
