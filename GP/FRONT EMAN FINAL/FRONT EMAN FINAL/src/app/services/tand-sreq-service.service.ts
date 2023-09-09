import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TandSReqServiceService {

  constructor(private httpCLient:HttpClient) { }

  url: string ="http://localhost:8080/lab/tech-view-test-scan/" ;

  getdata(userName:any){
   
    return this.httpCLient.get(`${this.url}${userName}`); 
  }



}
