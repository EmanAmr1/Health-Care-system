import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllContactReqServiceService {

  constructor(private httpCLient:HttpClient) { }
  url: string ="http://localhost:8080/contacts/all-contact-requests-page"
  getreq(){
    return this.httpCLient.get(`${this.url}`);
  }
  

}
