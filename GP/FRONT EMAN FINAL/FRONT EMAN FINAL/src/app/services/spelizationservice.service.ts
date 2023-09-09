import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpelizationserviceService {
  
  constructor(private http:HttpClient) { }
  url: string ="http://localhost:8080/prescriptions/add-new-prescription/"
  
  public addpre(pre: any)


  { let hw= localStorage.getItem('scan');  
  console.log(hw);
    
    
    let userName= localStorage.getItem('username');
    return this.http.post(`${this.url}${hw}/${userName}`,pre);
  }

}
