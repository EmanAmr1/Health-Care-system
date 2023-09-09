import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesttableserviceService {

  constructor(private httpCLient:HttpClient) { }


  url: string ="http://localhost:8080/api/test/table/" ;

  getlab(userName:any){
    
    return this.httpCLient.get(`${this.url}${userName}`); 
  }



}
