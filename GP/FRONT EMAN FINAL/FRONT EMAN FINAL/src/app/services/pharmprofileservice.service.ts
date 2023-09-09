import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PharmprofileserviceService {

  constructor(private httpCLient:HttpClient) { }

  url: string ="http://localhost:8080/pharmacist/pharmacist-profile/"
  getprdata(userName:any){

    return this.httpCLient.get(`${this.url}${userName}`); 
  }
  private baseUrl2 = 'http://localhost:8080/user/image/download/';

 


  



  downloadImage(userName: any) {
    return this.httpCLient.get(`${this.baseUrl2}${userName}`, { responseType: 'blob' });
  }
}
