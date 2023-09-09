import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientProfile } from '../classes/patientProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {


  constructor(private httpCLient:HttpClient) { }


  url: string ="http://localhost:8080/patients/"
  getmedicine(userName:any){

    return this.httpCLient.get(`${this.url}${userName}`); 
  }

  url3: string ="http://localhost:8080/patients/patient-profile/"
  getdata(userName:any){

    return this.httpCLient.get(`${this.url3}${userName}`); 
  }

  //private baseUrl = 'http://localhost:8080/user/image/upload/';
  
  private baseUrl2 = 'http://localhost:8080/user/image/download/';

 


  



  downloadImage(userName: any) {
    return this.httpCLient.get(`${this.baseUrl2}${userName}`, { responseType: 'blob' });
  }



}



