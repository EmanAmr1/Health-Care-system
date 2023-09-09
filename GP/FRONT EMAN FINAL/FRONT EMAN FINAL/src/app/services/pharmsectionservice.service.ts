import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pharmsectionclass } from '../classes/pharmsectionclass';

@Injectable({
  providedIn: 'root'
})
export class PharmsectionserviceService {

  constructor(private httpCLient:HttpClient) { }

  url: string ="http://localhost:8080/pharmacist/" ;

  getmedicine(userName:any){
    
    return this.httpCLient.get<Pharmsectionclass[]>(`${this.url}${userName}`);}



}
