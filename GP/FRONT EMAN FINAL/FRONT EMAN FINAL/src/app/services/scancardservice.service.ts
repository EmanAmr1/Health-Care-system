import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScancardserviceService {

  constructor(private httpCLient:HttpClient) { }

  url: string ="http://localhost:8080/patients/tag-Id"
  scanfunction(){
    let res= localStorage.getItem('scan');  
    console.log(res);
    return this.httpCLient.get(`${this.url}`,{responseType: 'text'}); 
  }

}
