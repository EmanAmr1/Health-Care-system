import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabserviceService {

  constructor(private httpCLient:HttpClient) { }
  url: string ="http://localhost:8080/api/scan/table/" ;

  getlab(userName:any){
    
    return this.httpCLient.get(`${this.url}${userName}`); 
  }


}
