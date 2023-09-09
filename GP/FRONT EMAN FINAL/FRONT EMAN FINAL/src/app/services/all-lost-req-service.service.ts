import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllLostReqServiceService {

  constructor(private httpCLient:HttpClient) { }

  
  url: string ="http://localhost:8080/losts/all-lost-card-requests-page"
  getreqlost(){
    return this.httpCLient.get(`${this.url}`);
  }


}
