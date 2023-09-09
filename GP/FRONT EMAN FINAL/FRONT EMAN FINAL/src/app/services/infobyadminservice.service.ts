import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfobyadminserviceService {

  constructor(private http:HttpClient) { }
  url: string ="http://localhost:8080/admin/add-patient-medicalInfo/"
  
  public infobyadminfun(info: any)


  { let hw= localStorage.getItem('scan');  
  console.log(hw);
    
    return this.http.post(`${this.url}${hw}`,info);
  }



}
